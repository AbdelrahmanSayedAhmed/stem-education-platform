import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen, Trophy, Users, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Curriculum | STEM Education Platform',
  description: 'Explore our comprehensive STEM curriculum structure, learning levels, and educational outcomes designed for students from elementary to university level.',
}

export default function Curriculum() {
  const levels = [
    {
      title: 'Elementary (Grades K-5)',
      description: 'Foundation building with hands-on activities and visual learning',
      subjects: ['Basic Math', 'Science Exploration', 'Simple Machines', 'Nature Studies'],
      outcomes: ['Number sense', 'Scientific observation', 'Problem-solving basics', 'Curiosity development']
    },
    {
      title: 'Middle School (Grades 6-8)',
      description: 'Deeper exploration and introduction to advanced concepts',
      subjects: ['Pre-Algebra', 'Life Sciences', 'Physical Science', 'Earth Science'],
      outcomes: ['Algebraic thinking', 'Scientific method', 'Data analysis', 'Critical reasoning']
    },
    {
      title: 'High School (Grades 9-12)',
      description: 'Advanced topics and preparation for higher education',
      subjects: ['Algebra & Geometry', 'Biology & Chemistry', 'Physics', 'Calculus'],
      outcomes: ['Mathematical proficiency', 'Laboratory skills', 'Research abilities', 'College readiness']
    },
    {
      title: 'University Level',
      description: 'Specialized courses and research-oriented learning',
      subjects: ['Advanced Mathematics', 'Specialized Sciences', 'Engineering Principles', 'Research Methods'],
      outcomes: ['Expert knowledge', 'Research capabilities', 'Innovation skills', 'Professional readiness']
    }
  ]

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Content',
      description: 'Over 10,000 lessons, activities, and assessments across all STEM subjects'
    },
    {
      icon: Trophy,
      title: 'Achievement System',
      description: 'Progressive badges and certificates that recognize mastery and skill development'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Group projects, peer reviews, and community discussions enhance understanding'
    }
  ]

  const outcomes = [
    'Develop strong foundational knowledge in mathematics and sciences',
    'Build critical thinking and problem-solving skills',
    'Gain hands-on experience with scientific methods and mathematical reasoning',
    'Prepare for advanced study and careers in STEM fields',
    'Foster creativity and innovation through project-based learning',
    'Develop communication skills through scientific writing and presentations'
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 dark:from-brand-blue/10 dark:to-brand-teal/10">
        <div className="container px-4 py-24 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                STEM Curriculum
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured, progressive learning path that takes students from basic concepts 
              to advanced mastery across all STEM disciplines, designed by educators and 
              subject matter experts.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Curriculum Structure</h2>
            <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Our curriculum is carefully designed to build knowledge progressively, with each level 
              preparing students for the next stage of their STEM education journey.
            </p>
            
            <div className="space-y-8">
              {levels.map((level, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-brand-blue to-brand-teal" />
                  <CardHeader>
                    <CardTitle className="text-2xl text-brand-blue">{level.title}</CardTitle>
                    <CardDescription className="text-base">{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-brand-teal">Core Subjects:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {level.subjects.map((subject, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-brand-yellow" />
                            <span className="text-sm">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-brand-teal">Learning Outcomes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {level.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-brand-yellow" />
                            <span className="text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Curriculum Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-gradient-to-r from-brand-blue to-brand-teal rounded-full w-fit">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Educational Outcomes</h2>
            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 rounded-2xl p-8 md:p-12">
              <p className="text-lg mb-8 text-center">
                Students who complete our curriculum will achieve the following outcomes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students and educators who are already benefiting from our 
              comprehensive STEM curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/subjects">
                  Explore Subjects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/tools/calculators/scientific">
                  Try Our Tools
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}