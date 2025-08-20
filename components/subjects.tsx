import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Calculator, 
  Atom, 
  Dna, 
  Zap,
  ArrowRight
} from 'lucide-react'

export function Subjects() {
  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Explore algebra, calculus, geometry, statistics, and more with interactive problem solving.',
      icon: Calculator,
      color: 'from-blue-500 to-cyan-500',
      topics: ['Algebra', 'Calculus', 'Geometry', 'Statistics', 'Trigonometry'],
      href: '/subjects/mathematics'
    },
    {
      id: 'physics',
      name: 'Physics',
      description: 'Discover the fundamental laws of nature through experiments and simulations.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Quantum Physics'],
      href: '/subjects/physics'
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      description: 'Learn about atoms, molecules, reactions, and the periodic table in our virtual lab.',
      icon: Atom,
      color: 'from-green-500 to-emerald-500',
      topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry', 'Analytical Chemistry'],
      href: '/subjects/chemistry'
    },
    {
      id: 'biology',
      name: 'Biology',
      description: 'Explore life sciences from cells to ecosystems with 3D models and interactive content.',
      icon: Dna,
      color: 'from-orange-500 to-red-500',
      topics: ['Cell Biology', 'Genetics', 'Evolution', 'Ecology', 'Human Anatomy'],
      href: '/subjects/biology'
    }
  ]

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore STEM Subjects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into each subject with our comprehensive curriculum covering 
            all grade levels from elementary to university.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((subject) => (
            <Card key={subject.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${subject.color}`} />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${subject.color} text-white`}>
                      <subject.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {subject.name}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <Link href={subject.href}>
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/subjects">
              View All Subjects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}