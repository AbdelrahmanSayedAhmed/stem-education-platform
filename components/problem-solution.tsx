import { AlertCircle, CheckCircle } from 'lucide-react'

export function ProblemSolution() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div>
            <div className="flex items-center mb-6">
              <AlertCircle className="h-8 w-8 text-destructive mr-3" />
              <h2 className="text-3xl font-bold">The Challenge</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Traditional STEM education faces significant challenges:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <div>
                    <strong>Students struggle</strong> with abstract concepts that lack visual representation
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <div>
                    <strong>Teachers lack resources</strong> for interactive, hands-on learning experiences
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <div>
                    <strong>One-size-fits-all approach</strong> doesn&apos;t accommodate different learning styles
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <div>
                    <strong>Limited access</strong> to advanced tools and experiments outside the classroom
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-brand-teal mr-3" />
              <h2 className="text-3xl font-bold">Our Solution</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We transform STEM education through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full mt-2" />
                  <div>
                    <strong>Interactive visualizations</strong> that make complex concepts easy to understand
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full mt-2" />
                  <div>
                    <strong>Rich teaching tools</strong> with ready-made lessons and real-time progress tracking
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full mt-2" />
                  <div>
                    <strong>Personalized learning paths</strong> that adapt to each student&apos;s pace and style
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full mt-2" />
                  <div>
                    <strong>24/7 access</strong> to advanced calculators, simulators, and virtual labs
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}