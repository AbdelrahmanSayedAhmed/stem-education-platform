'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  Thermometer,
  Magnet,
  Eye,
  Atom,
  ArrowRight,
  Play,
  BookOpen,
  Target,
  Users,
  Clock
} from 'lucide-react'

export function PhysicsContent() {
  const physicsTopics = [
    {
      id: 'mechanics',
      name: 'Mechanics',
      description: 'Study motion, forces, energy, and momentum with interactive simulations and real-world examples.',
      icon: Target,
      level: 'Beginner to Advanced',
      lessons: 35,
      duration: '12 hours',
      color: 'bg-blue-500',
      topics: ['Kinematics', 'Dynamics', 'Energy', 'Momentum']
    },
    {
      id: 'thermodynamics',
      name: 'Thermodynamics',
      description: 'Explore heat, temperature, and energy transfer in various systems and processes.',
      icon: Thermometer,
      level: 'Intermediate to Advanced',
      lessons: 28,
      duration: '10 hours',
      color: 'bg-red-500',
      topics: ['Heat Transfer', 'Laws of Thermodynamics', 'Entropy', 'Phase Changes']
    },
    {
      id: 'electromagnetism',
      name: 'Electromagnetism',
      description: 'Understand electric and magnetic fields, circuits, and electromagnetic waves.',
      icon: Magnet,
      level: 'Intermediate to Advanced',
      lessons: 42,
      duration: '15 hours',
      color: 'bg-yellow-500',
      topics: ['Electric Fields', 'Magnetic Fields', 'Circuits', 'EM Waves']
    },
    {
      id: 'optics',
      name: 'Optics',
      description: 'Learn about light, lenses, mirrors, and optical phenomena through virtual experiments.',
      icon: Eye,
      level: 'Beginner to Intermediate',
      lessons: 25,
      duration: '8 hours',
      color: 'bg-green-500',
      topics: ['Ray Optics', 'Wave Optics', 'Lenses', 'Interference']
    },
    {
      id: 'quantum',
      name: 'Quantum Physics',
      description: 'Dive into the fascinating world of quantum mechanics and atomic structure.',
      icon: Atom,
      level: 'Advanced',
      lessons: 20,
      duration: '12 hours',
      color: 'bg-purple-500',
      topics: ['Wave-Particle Duality', 'Uncertainty Principle', 'Atomic Structure', 'Quantum States']
    }
  ]

  const experiments = [
    { name: 'Pendulum Motion', description: 'Study oscillatory motion', difficulty: 'Easy' },
    { name: 'Electric Field Mapping', description: 'Visualize electric fields', difficulty: 'Medium' },
    { name: 'Wave Interference', description: 'Explore wave phenomena', difficulty: 'Medium' },
    { name: 'Photoelectric Effect', description: 'Quantum physics experiment', difficulty: 'Hard' }
  ]

  return (
    <main className="py-12">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Physics Department
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Physics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore the fundamental laws that govern our universe through interactive 
            experiments, simulations, and hands-on learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/subjects/physics/experiments">
                <Zap className="mr-2 h-5 w-5" />
                Try Experiments
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Demos
            </Button>
          </div>
        </div>

        {/* Physics Topics Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Physics Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {physicsTopics.map((topic) => (
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

        {/* Virtual Experiments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Virtual Experiments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiments.map((experiment) => (
              <Card key={experiment.name} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-purple-100 text-purple-600 w-fit">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{experiment.name}</CardTitle>
                  <CardDescription>{experiment.description}</CardDescription>
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    experiment.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    experiment.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {experiment.difficulty}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" size="sm">
                    Start Experiment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Physics Community
              </CardTitle>
              <CardDescription className="text-base">
                Connect with physics enthusiasts, discuss experiments, and get help from experts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" asChild>
                  <Link href="/community/physics">
                    Join Discussion
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link href="/help/physics">
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