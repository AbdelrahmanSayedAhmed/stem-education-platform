import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Calculator, 
  Atom, 
  Dna, 
  Zap,
  ArrowRight,
  BookOpen,
  Trophy,
  Clock
} from 'lucide-react'

export function SubjectGrid() {
  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Master algebra, calculus, geometry, statistics, and more with step-by-step problem solving and interactive visualizations.',
      icon: Calculator,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      topics: ['Algebra', 'Calculus', 'Geometry', 'Statistics', 'Trigonometry', 'Linear Algebra'],
      levels: 'Grade 1 - University',
      lessons: '200+',
      href: '/subjects/mathematics'
    },
    {
      id: 'physics',
      name: 'Physics',
      description: 'Discover the fundamental laws of nature through interactive experiments, simulations, and real-world applications.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Quantum Physics', 'Relativity'],
      levels: 'Grade 6 - University',
      lessons: '150+',
      href: '/subjects/physics'
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      description: 'Explore atoms, molecules, reactions, and chemical processes in our interactive virtual laboratory.',
      icon: Atom,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry', 'Analytical Chemistry', 'Environmental Chemistry'],
      levels: 'Grade 8 - University',
      lessons: '120+',
      href: '/subjects/chemistry'
    },
    {
      id: 'biology',
      name: 'Biology',
      description: 'Study life sciences from molecular level to ecosystems with 3D models, virtual dissections, and field studies.',
      icon: Dna,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      topics: ['Cell Biology', 'Genetics', 'Evolution', 'Ecology', 'Human Anatomy', 'Microbiology'],
      levels: 'Grade 5 - University',
      lessons: '180+',
      href: '/subjects/biology'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">650+</div>
          <div className="text-sm text-muted-foreground">Total Lessons</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">50+</div>
          <div className="text-sm text-muted-foreground">Virtual Labs</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">24</div>
          <div className="text-sm text-muted-foreground">Major Topics</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">12</div>
          <div className="text-sm text-muted-foreground">Grade Levels</div>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {subjects.map((subject) => (
          <Card key={subject.id} className={`group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 ${subject.bgColor}`}>
            <div className={`h-3 bg-gradient-to-r ${subject.color}`} />
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${subject.color} text-white shadow-lg`}>
                    <subject.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {subject.name}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{subject.lessons}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{subject.levels}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {subject.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  Key Topics
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {subject.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-2 bg-background/60 backdrop-blur text-muted-foreground rounded-lg text-sm font-medium border"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <Button size="lg" className="w-full group-hover:scale-105 transition-transform" asChild>
                <Link href={subject.href}>
                  Start Learning {subject.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your STEM Journey?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of students already learning with our platform. Get personalized learning paths, 
          track your progress, and unlock achievements as you master each subject.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/register">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/dashboard">
              View Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}