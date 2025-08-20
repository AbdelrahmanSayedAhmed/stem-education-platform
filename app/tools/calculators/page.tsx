import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ScientificCalculator } from '@/components/calculators/scientific-calculator'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Scientific Calculator | STEM Tools',
  description: 'Advanced scientific calculator with trigonometric functions, logarithms, memory operations, and calculation history.',
}

export default function CalculatorPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Scientific Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful scientific calculator with advanced functions, memory operations, 
              and calculation history for all your mathematical needs.
            </p>
          </div>
          <ScientificCalculator />
        </div>
      </main>
      <Footer />
    </div>
  )
}