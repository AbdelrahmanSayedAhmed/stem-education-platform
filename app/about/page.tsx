import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Target, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | STEM Education Platform',
  description: 'Learn about our mission to transform STEM education through interactive learning, innovative technology, and personalized experiences for students and educators.',
}

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of educational technology to create engaging, effective learning experiences.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in our content, tools, and support to ensure student success.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'We believe quality STEM education should be accessible to all students, regardless of background or circumstance.'
    },
    {
      icon: Zap,
      title: 'Engagement',
      description: 'We make learning interactive, fun, and meaningful through gamification and hands-on experiences.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 dark:from-brand-blue/10 dark:to-brand-teal/10">
        <div className="container px-4 py-24 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming STEM Education for the{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                Digital Age
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re on a mission to make Science, Technology, Engineering, and Mathematics 
              accessible, engaging, and effective for learners of all ages through innovative 
              educational technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission</h2>
            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-center leading-relaxed">
                To democratize STEM education by providing interactive, personalized learning experiences 
                that inspire curiosity, build understanding, and prepare students for success in an 
                increasingly technological world. We believe that when students can visualize concepts, 
                experiment safely, and learn at their own pace, they develop a deeper love for learning 
                and stronger foundational skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-brand-blue">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  We replace passive learning with active engagement through simulations, 
                  virtual experiments, and hands-on activities that make abstract concepts tangible.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-brand-teal">Personalized Paths</h3>
                <p className="text-muted-foreground">
                  Our adaptive learning technology adjusts content difficulty and presentation 
                  style to match each student&apos;s unique learning preferences and pace.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-brand-yellow">Real-world Applications</h3>
                <p className="text-muted-foreground">
                  Every concept is connected to real-world applications, helping students 
                  understand the relevance and importance of what they&apos;re learning.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-brand-blue">Collaborative Community</h3>
                <p className="text-muted-foreground">
                  Students, teachers, and experts collaborate in our platform, sharing knowledge, 
                  asking questions, and supporting each other&apos;s learning journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-brand-blue to-brand-teal rounded-lg">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes Us Unique</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-blue pl-6">
                <h3 className="text-xl font-semibold mb-2">Advanced Scientific Calculator</h3>
                <p className="text-muted-foreground">
                  Our built-in scientific calculator provides step-by-step solutions and 
                  graphing capabilities, helping students understand mathematical processes 
                  rather than just getting answers.
                </p>
              </div>
              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="text-xl font-semibold mb-2">Virtual Laboratory</h3>
                <p className="text-muted-foreground">
                  Conduct safe experiments in our virtual labs, exploring chemistry reactions, 
                  physics principles, and biological processes without the need for physical equipment.
                </p>
              </div>
              <div className="border-l-4 border-brand-yellow pl-6">
                <h3 className="text-xl font-semibold mb-2">Gamified Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Students earn points, unlock achievements, and track their progress through 
                  visual dashboards that make learning rewarding and motivating.
                </p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <h3 className="text-xl font-semibold mb-2">Comprehensive Teacher Support</h3>
                <p className="text-muted-foreground">
                  Educators get powerful tools for lesson planning, student progress monitoring, 
                  and classroom management, making it easier to implement personalized learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}