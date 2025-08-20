import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { MathematicsContent } from '@/components/subjects/mathematics-content'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Mathematics | STEM Learning Platform',
  description: 'Master mathematics from basic arithmetic to advanced calculus with interactive lessons, problem solving, and step-by-step explanations.',
}

export default function MathematicsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <MathematicsContent />
      <Footer />
    </div>
  )
}