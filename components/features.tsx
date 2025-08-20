import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  Users,
  Calculator,
  Smartphone
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Hands-on experiments, simulations, and multimedia content that brings STEM concepts to life.',
      color: 'text-brand-blue'
    },
    {
      icon: GraduationCap,
      title: 'Rich Curriculum',
      description: 'Comprehensive curriculum covering all STEM subjects from elementary to university level.',
      color: 'text-brand-teal'
    },
    {
      icon: Trophy,
      title: 'Progress & Achievements',
      description: 'Track your learning journey with detailed analytics and unlock achievements as you master concepts.',
      color: 'text-brand-yellow'
    },
    {
      icon: Users,
      title: 'Teacher Tools',
      description: 'Specialized tools for educators including lesson plans, progress monitoring, and classroom management.',
      color: 'text-brand-blue'
    },
    {
      icon: Calculator,
      title: 'Real-time Calculators',
      description: 'Advanced scientific calculators with step-by-step solutions and graphing capabilities.',
      color: 'text-brand-teal'
    },
    {
      icon: Smartphone,
      title: 'Accessible & Responsive',
      description: 'Learn anywhere, anytime with our fully responsive platform optimized for all devices.',
      color: 'text-brand-yellow'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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