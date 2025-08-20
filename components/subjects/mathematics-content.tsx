'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Calculator, 
  TrendingUp,
  PieChart,
  Square,
  Triangle,
  ArrowRight,
  Play,
  BookOpen,
  Target,
  Users,
  Clock
} from 'lucide-react'

export function MathematicsContent() {
  const mathTopics = [
    {
      id: 'algebra',
      name: 'Algebra',
      description: 'Master equations, inequalities, functions, and algebraic expressions with step-by-step problem solving.',
      icon: Calculator,
      level: 'Beginner to Advanced',
      lessons: 45,
      duration: '12 hours',
      color: 'bg-blue-500',
      topics: ['Linear Equations', 'Quadratic Functions', 'Polynomials', 'Systems of Equations']
    },
    {
      id: 'calculus',
      name: 'Calculus',
      description: 'Explore limits, derivatives, integrals, and their applications in real-world problems.',
      icon: TrendingUp,
      level: 'Intermediate to Advanced',
      lessons: 38,
      duration: '15 hours',
      color: 'bg-green-500',
      topics: ['Limits', 'Derivatives', 'Integrals', 'Applications']
    },
    {
      id: 'statistics',
      name: 'Statistics',
      description: 'Learn data analysis, probability, hypothesis testing, and statistical modeling.',
      icon: PieChart,
      level: 'Beginner to Advanced',
      lessons: 32,
      duration: '10 hours',
      color: 'bg-purple-500',
      topics: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Regression']
    },
    {
      id: 'geometry',
      name: 'Geometry',
      description: 'Study shapes, angles, areas, volumes, and geometric proofs with interactive visualizations.',
      icon: Square,
      level: 'Beginner to Intermediate',
      lessons: 28,
      duration: '8 hours',
      color: 'bg-orange-500',
      topics: ['Plane Geometry', 'Solid Geometry', 'Coordinate Geometry', 'Proofs']
    },
    {
      id: 'trigonometry',
      name: 'Trigonometry',
      description: 'Master trigonometric functions, identities, and their applications in various fields.',
      icon: Triangle,
      level: 'Intermediate',
      lessons: 25,
      duration: '7 hours',
      color: 'bg-red-500',
      topics: ['Trigonometric Functions', 'Identities', 'Equations', 'Applications']
    }
  ]

  const achievements = [
    { name: 'Problem Solver', description: 'Solve 100 math problems', icon: Target, unlocked: true },
    { name: 'Equation Master', description: 'Complete Algebra course', icon: Calculator, unlocked: true },
    { name: 'Function Expert', description: 'Master all function types', icon: TrendingUp, unlocked: false },
    { name: 'Geometry Guru', description: 'Complete Geometry course', icon: Square, unlocked: false }
  ]

  return (
    <main className="py-12">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Calculator className="h-4 w-4 mr-2" />
            Mathematics Department
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Mathematics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From basic arithmetic to advanced calculus, develop strong mathematical foundations 
            with interactive lessons, real-world applications, and personalized learning paths.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/tools/calculators">
                <Calculator className="mr-2 h-5 w-5" />
                Use Calculator
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">65%</div>
              <p className="text-sm text-muted-foreground">Overall completion</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">42/168</div>
              <p className="text-sm text-muted-foreground">Lessons completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">2,450</div>
              <p className="text-sm text-muted-foreground">Points earned</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">12 days</div>
              <p className="text-sm text-muted-foreground">Learning streak</p>
            </CardContent>
          </Card>
        </div>

        {/* Math Topics Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Mathematics Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathTopics.map((topic) => (
              <Card key={topic.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${topic.color} text-white`}>
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {topic.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {topic.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {topic.name}
                  </CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                  <div className="text-sm font-medium text-muted-foreground">
                    Level: {topic.level}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Concepts:</h4>
                      <div className="flex flex-wrap gap-1">
                        {topic.topics.map((concept) => (
                          <span
                            key={concept}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Mathematics Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.name} className={`text-center ${achievement.unlocked ? 'border-green-200 bg-green-50' : 'opacity-50'}`}>
                <CardHeader>
                  <div className={`mx-auto p-3 rounded-full w-fit ${achievement.unlocked ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{achievement.name}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                {achievement.unlocked && (
                  <CardContent>
                    <div className="text-green-600 font-medium text-sm">
                      ✓ Unlocked!
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Community & Support */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Join the Math Community
              </CardTitle>
              <CardDescription className="text-base">
                Connect with fellow math enthusiasts, get help from tutors, and participate in math challenges.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" asChild>
                  <Link href="/community/mathematics">
                    Join Discussion
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link href="/help/mathematics">
                    Get Help
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}