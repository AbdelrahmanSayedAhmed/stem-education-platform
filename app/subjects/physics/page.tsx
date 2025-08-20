import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { PhysicsContent } from '@/components/subjects/physics-content'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Physics | STEM Learning Platform',
  description: 'Explore the fundamental laws of nature with interactive experiments, simulations, and real-world applications.',
}

export default function PhysicsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PhysicsContent />
      <Footer />
    </div>
  )
}