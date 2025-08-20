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

    const where = subjectId ? { subjectId } : {}

    const topics = await prisma.topic.findMany({
      where,
      orderBy: [{ subjectId: 'asc' }, { order: 'asc' }],
      include: {
        subject: {
          select: {
            id: true,
            name: true
          }
        },
        _count: {
          select: {
            lessons: true
          }
        }
      }
    })

    return NextResponse.json(topics)
  } catch (error) {
    console.error('Error fetching topics:', error)
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
    const { title, description, content, difficulty, subjectId, order } = body

    if (!title || !description || !subjectId) {
      return NextResponse.json({ 
        error: 'Title, description, and subject are required' 
      }, { status: 400 })
    }

    const topic = await prisma.topic.create({
      data: {
        title,
        description,
        content: content || '',
        difficulty: difficulty || 'BEGINNER',
        subjectId,
        order: order || 0
      },
      include: {
        subject: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    return NextResponse.json(topic, { status: 201 })
  } catch (error) {
    console.error('Error creating topic:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}