import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-brand-blue to-brand-teal">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Learning by Doing
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students and educators who are revolutionizing STEM education. 
            Experience the power of interactive learning today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/subjects">
                Explore Subjects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20" 
              asChild
            >
              <Link href="/tools/calculators/scientific">
                Try Calculator
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold opacity-90">100%</div>
              <div className="text-sm opacity-75">Free to Start</div>
            </div>
            <div>
              <div className="text-3xl font-bold opacity-90">24/7</div>
              <div className="text-sm opacity-75">Always Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold opacity-90">∞</div>
              <div className="text-sm opacity-75">Unlimited Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}