import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, ArrowLeft, BookOpen, Eye, EyeOff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manage Lessons | Admin Dashboard',
  description: 'Create and manage lesson content',
}

export default function AdminLessonsPage() {
  // This would normally fetch lessons from the database
  const lessons: any[] = []

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
                Manage Lessons
              </h1>
              <p className="text-muted-foreground mt-2">
                Create and manage detailed lesson content for your topics
              </p>
            </div>
            <Button asChild>
              <Link href="/admin/lessons/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Lesson
              </Link>
            </Button>
          </div>
        </div>

        {lessons.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No lessons found</h3>
              <p className="text-muted-foreground mb-6">
                Create your first lesson to provide detailed learning content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/admin/lessons/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Lesson
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/admin/topics">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Manage Topics First
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="subject-filter" className="text-sm font-medium whitespace-nowrap">
                      Subject:
                    </label>
                    <select
                      id="subject-filter"
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                    >
                      <option value="">All Subjects</option>
                      {/* Subject options would be populated here */}
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label htmlFor="topic-filter" className="text-sm font-medium whitespace-nowrap">
                      Topic:
                    </label>
                    <select
                      id="topic-filter"
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                    >
                      <option value="">All Topics</option>
                      {/* Topic options would be populated here */}
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label htmlFor="status-filter" className="text-sm font-medium whitespace-nowrap">
                      Status:
                    </label>
                    <select
                      id="status-filter"
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                    >
                      <option value="">All Statuses</option>
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lessons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson: any) => (
                <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg line-clamp-2">{lesson.title}</CardTitle>
                      <div className="flex items-center ml-2">
                        {lesson.published ? (
                          <Eye className="h-4 w-4 text-green-600" />
                        ) : (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>Subject: {lesson.subject?.name}</div>
                      <div>Topic: {lesson.topic?.title}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full w-fit ${
                      lesson.difficulty === 'BEGINNER' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-950/20 dark:text-green-400'
                        : lesson.difficulty === 'INTERMEDIATE'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950/20 dark:text-yellow-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-950/20 dark:text-red-400'
                    }`}>
                      {lesson.difficulty}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {lesson.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button size="sm" asChild>
                          <Link href={`/admin/lessons/${lesson.id}`}>
                            Edit
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/lessons/${lesson.id}`}>
                            Preview
                          </Link>
                        </Button>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        lesson.published 
                          ? 'bg-green-100 text-green-800 dark:bg-green-950/20 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-950/20 dark:text-gray-400'
                      }`}>
                        {lesson.published ? 'Published' : 'Draft'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}