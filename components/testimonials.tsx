import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "High School Physics Teacher",
      content: "This platform has transformed how I teach physics. My students are more engaged than ever with the interactive simulations and real-time feedback.",
      rating: 5
    },
    {
      name: "Alex Chen",
      role: "University Student",
      content: "The step-by-step calculator solutions helped me understand calculus concepts I'd been struggling with for months. Game changer!",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Middle School Math Teacher",
      content: "My students love the gamified approach. They're actually excited about math homework now, and their test scores have improved by 30%.",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students and educators who have transformed their STEM learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}