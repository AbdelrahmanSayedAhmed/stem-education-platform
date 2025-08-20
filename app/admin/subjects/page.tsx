'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, ArrowLeft, BookOpen } from 'lucide-react'

interface Subject {
  id: string
  name: string
  description: string
  icon: string
  color: string
  grade: string
  order: number
  _count: {
    topics: number
    lessons: number
  }
}

export default function AdminSubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSubjects()
  }, [])

  const fetchSubjects = async () => {
    try {
      const response = await fetch('/api/admin/subjects')
      if (!response.ok) {
        throw new Error('Failed to fetch subjects')
      }
      const data = await response.json()
      setSubjects(data)
    } catch (error) {
      console.error('Error fetching subjects:', error)
      setError('Failed to load subjects')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-600">{error}</div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Button variant="ghost" size="sm" asChild className="mr-2">
                  <Link href="/admin">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Dashboard
                  </Link>
                </Button>
              </div>
              <h1 className="text-3xl font-bold flex items-center">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                Manage Subjects
              </h1>
              <p className="text-muted-foreground mt-2">
                Create and organize learning subjects for your platform
              </p>
            </div>
            <Button asChild>
              <Link href="/admin/subjects/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Subject
              </Link>
            </Button>
          </div>
        </div>

        {subjects.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No subjects found</h3>
              <p className="text-muted-foreground mb-6">
                Get started by creating your first subject
              </p>
              <Button asChild>
                <Link href="/admin/subjects/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Create First Subject
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <Card key={subject.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${subject.color} flex items-center justify-center mr-3`}>
                      <span className="text-white text-lg font-bold">
                        {subject.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div>{subject.name}</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        {subject.grade}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{subject.description}</p>
                  <div className="text-sm text-muted-foreground mb-4">
                    {subject._count.topics} topics • {subject._count.lessons} lessons
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" asChild>
                      <Link href={`/admin/subjects/${subject.id}`}>
                        Edit
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/admin/topics?subject=${subject.id}`}>
                        View Topics
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}