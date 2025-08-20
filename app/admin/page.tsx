import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  FileText, 
  Users,
  BarChart3,
  Settings,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Dashboard | STEM Learning Platform',
  description: 'Manage subjects, topics, lessons, and users',
}

export default function AdminPage() {
  const adminCards = [
    {
      title: 'Subjects',
      description: 'Manage learning subjects and categories',
      icon: BookOpen,
      href: '/admin/subjects',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-950/20'
    },
    {
      title: 'Topics',
      description: 'Organize topics within subjects',
      icon: FileText,
      href: '/admin/topics',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-950/20'
    },
    {
      title: 'Lessons',
      description: 'Create and manage lesson content',
      icon: BookOpen,
      href: '/admin/lessons',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-950/20'
    },
    {
      title: 'Users',
      description: 'Manage user accounts and roles',
      icon: Users,
      href: '/admin/users',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-950/20'
    },
    {
      title: 'Analytics',
      description: 'View platform usage statistics',
      icon: BarChart3,
      href: '/admin/analytics',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100 dark:bg-cyan-950/20'
    },
    {
      title: 'Settings',
      description: 'Platform configuration and settings',
      icon: Settings,
      href: '/admin/settings',
      color: 'text-gray-600',
      bgColor: 'bg-gray-100 dark:bg-gray-950/20'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Manage your STEM education platform content and users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminCards.map((card) => {
            const Icon = card.icon
            return (
              <Card key={card.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${card.bgColor}`}>
                      <Icon className={`h-6 w-6 ${card.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {card.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={card.href}>
                      Manage {card.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold">0</div>
                <p className="text-muted-foreground">Total Users</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold">0</div>
                <p className="text-muted-foreground">Subjects</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold">0</div>
                <p className="text-muted-foreground">Topics</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold">0</div>
                <p className="text-muted-foreground">Lessons</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}