import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Calculator, 
  Gamepad2, 
  Users, 
  BookOpen, 
  Trophy, 
  Zap,
  Brain,
  Target
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Calculator,
      title: 'Advanced Calculator',
      description: 'Full-featured scientific calculator with history, memory functions, and step-by-step solutions.',
      color: 'text-blue-600'
    },
    {
      icon: Gamepad2,
      title: 'Gamified Learning',
      description: 'Earn points, unlock achievements, and compete on leaderboards while mastering STEM concepts.',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Tailored experiences for students, teachers, tutors, and administrators with specialized tools.',
      color: 'text-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Interactive Subjects',
      description: 'Explore Math, Physics, Chemistry, and Biology with hands-on experiments and simulations.',
      color: 'text-orange-600'
    },
    {
      icon: Brain,
      title: 'Adaptive Learning',
      description: 'AI-powered personalized learning paths that adapt to your pace and learning style.',
      color: 'text-pink-600'
    },
    {
      icon: Target,
      title: 'Progress Tracking',
      description: 'Detailed analytics and progress reports to track your learning journey and identify areas for improvement.',
      color: 'text-indigo-600'
    },
    {
      icon: Trophy,
      title: 'Achievements System',
      description: 'Unlock badges and certificates as you complete learning milestones and demonstrate mastery.',
      color: 'text-yellow-600'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together with classmates and get instant help from tutors in our collaborative environment.',
      color: 'text-red-600'
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for STEM Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, resources, and support 
            you need to excel in Science, Technology, Engineering, and Mathematics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-background">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}