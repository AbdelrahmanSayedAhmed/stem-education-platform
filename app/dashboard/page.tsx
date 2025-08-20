import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Dashboard } from '@/components/dashboard/dashboard-content'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Dashboard | STEM Learning Platform',
  description: 'Track your learning progress, view achievements, and manage your STEM education journey.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Dashboard />
      <Footer />
    </div>
  )
}