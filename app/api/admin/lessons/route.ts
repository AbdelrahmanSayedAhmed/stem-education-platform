import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const subjectId = searchParams.get('subjectId')
    const topicId = searchParams.get('topicId')
    const published = searchParams.get('published')

    const where: any = {}
    if (subjectId) where.subjectId = subjectId
    if (topicId) where.topicId = topicId
    if (published !== null) where.published = published === 'true'

    const lessons = await prisma.lesson.findMany({
      where,
      orderBy: [{ subjectId: 'asc' }, { topicId: 'asc' }, { order: 'asc' }],
      include: {
        subject: {
          select: {
            id: true,
            name: true
          }
        },
        topic: {
          select: {
            id: true,
            title: true
          }
        }
      }
    })

    return NextResponse.json(lessons)
  } catch (error) {
    console.error('Error fetching lessons:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { title, description, content, difficulty, subjectId, topicId, order, published } = body

    if (!title || !description || !subjectId || !topicId) {
      return NextResponse.json({ 
        error: 'Title, description, subject, and topic are required' 
      }, { status: 400 })
    }

    const lesson = await prisma.lesson.create({
      data: {
        title,
        description,
        content: content || '',
        difficulty: difficulty || 'BEGINNER',
        subjectId,
        topicId,
        order: order || 0,
        published: published || false
      },
      include: {
        subject: {
          select: {
            id: true,
            name: true
          }
        },
        topic: {
          select: {
            id: true,
            title: true
          }
        }
      }
    })

    return NextResponse.json(lesson, { status: 201 })
  } catch (error) {
    console.error('Error creating lesson:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}