import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Users, Trophy } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container px-4 py-32 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border bg-muted text-muted-foreground text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Welcome to the Future of STEM Education
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Master STEM with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Interactive Learning
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive STEM education platform with gamification, hands-on experiments, 
              and personalized learning paths for students from Grade 1 to university level.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/register">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link href="/subjects">
                Explore Subjects
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Trophy className="h-8 w-8 text-green-600" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-muted-foreground">Interactive Lessons</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
    </section>
  )
}