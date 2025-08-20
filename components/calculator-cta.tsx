import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, ArrowRight } from 'lucide-react'

export function CalculatorCTA() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 border-brand-blue/20">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <Calculator className="w-full h-full text-brand-blue" />
          </div>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Scientific Calculator
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Access our advanced scientific calculator with step-by-step solutions, 
              graphing capabilities, and comprehensive mathematical functions. Perfect for 
              students, teachers, and professionals.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand-blue">50+</div>
                <div className="text-sm text-muted-foreground">Mathematical Functions</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand-teal">24/7</div>
                <div className="text-sm text-muted-foreground">Available Access</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand-yellow">Free</div>
                <div className="text-sm text-muted-foreground">No Registration Required</div>
              </div>
            </div>
            
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/tools/calculators/scientific">
                Try Calculator Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}