import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { SubjectGrid } from '@/components/subjects/subject-grid'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'STEM Subjects | Interactive Learning Platform',
  description: 'Explore Mathematics, Physics, Chemistry, and Biology with interactive lessons, experiments, and personalized learning paths.',
}

export default function SubjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore STEM Subjects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive deep into Science, Technology, Engineering, and Mathematics with our 
              comprehensive curriculum designed for all grade levels.
            </p>
          </div>
          <SubjectGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}