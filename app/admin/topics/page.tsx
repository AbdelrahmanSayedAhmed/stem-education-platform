import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, ArrowLeft, FileText, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manage Topics | Admin Dashboard',
  description: 'Create and manage learning topics',
}

export default function AdminTopicsPage() {
  // This would normally fetch topics from the database
  const topics: any[] = []

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
                <FileText className="h-8 w-8 text-primary mr-3" />
                Manage Topics
              </h1>
              <p className="text-muted-foreground mt-2">
                Organize topics within subjects to structure learning content
              </p>
            </div>
            <Button asChild>
              <Link href="/admin/topics/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Topic
              </Link>
            </Button>
          </div>
        </div>

        {topics.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No topics found</h3>
              <p className="text-muted-foreground mb-6">
                Create your first topic to organize learning content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/admin/topics/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Topic
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/admin/subjects">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Manage Subjects First
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Filter by Subject */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="subject-filter" className="text-sm font-medium">
                    Filter by Subject:
                  </label>
                  <select
                    id="subject-filter"
                    className="flex h-9 w-48 rounded-md border border-input bg-background px-3 py-1 text-sm"
                  >
                    <option value="">All Subjects</option>
                    {/* Subject options would be populated here */}
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic: any) => (
                <Card key={topic.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      Subject: {topic.subject?.name}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full w-fit ${
                      topic.difficulty === 'BEGINNER' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-950/20 dark:text-green-400'
                        : topic.difficulty === 'INTERMEDIATE'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950/20 dark:text-yellow-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-950/20 dark:text-red-400'
                    }`}>
                      {topic.difficulty}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {topic.description}
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" asChild>
                        <Link href={`/admin/topics/${topic.id}`}>
                          Edit
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/admin/lessons?topic=${topic.id}`}>
                          View Lessons
                        </Link>
                      </Button>
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