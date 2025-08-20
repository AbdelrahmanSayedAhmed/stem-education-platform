import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { ProblemSolution } from '@/components/problem-solution'
import { Features } from '@/components/features'
import { Subjects } from '@/components/subjects'
import { CalculatorCTA } from '@/components/calculator-cta'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Features />
      <Subjects />
      <CalculatorCTA />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
