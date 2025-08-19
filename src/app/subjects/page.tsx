import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  Zap, 
  Atom, 
  Dna, 
  Computer, 
  Wrench,
  ChevronRight,
  BookOpen,
  Clock,
  Star
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function SubjectsPage() {
  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: Calculator,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      description: 'Master mathematical concepts from basic arithmetic to advanced calculus',
      topics: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
      levels: '12 Levels',
      duration: '120+ Hours',
      difficulty: 'Beginner to Expert'
    },
    {
      id: 'physics',
      name: 'Physics',
      icon: Zap,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      description: 'Explore the fundamental laws that govern our universe',
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Quantum'],
      levels: '10 Levels',
      duration: '100+ Hours',
      difficulty: 'Intermediate to Expert'
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      icon: Atom,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      description: 'Discover the building blocks of matter and their interactions',
      topics: ['Organic', 'Inorganic', 'Physical', 'Analytical'],
      levels: '8 Levels',
      duration: '80+ Hours',
      difficulty: 'Beginner to Advanced'
    },
    {
      id: 'biology',
      name: 'Biology',
      icon: Dna,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      description: 'Study life and living organisms in all their complexity',
      topics: ['Genetics', 'Ecology', 'Anatomy', 'Microbiology'],
      levels: '9 Levels',
      duration: '90+ Hours',
      difficulty: 'Beginner to Advanced'
    },
    {
      id: 'computer-science',
      name: 'Computer Science',
      icon: Computer,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      description: 'Learn programming, algorithms, and computational thinking',
      topics: ['Programming', 'Algorithms', 'Data Structures', 'Web Dev'],
      levels: '15 Levels',
      duration: '150+ Hours',
      difficulty: 'Beginner to Expert'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: Wrench,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      description: 'Apply scientific principles to design and build solutions',
      topics: ['Mechanical', 'Electrical', 'Civil', 'Software'],
      levels: '6 Levels',
      duration: '60+ Hours',
      difficulty: 'Intermediate to Expert'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Explore STEM Subjects
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose your subject and start your learning journey. Each subject is carefully structured 
                with interactive lessons, hands-on experiments, and gamified challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Interactive Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>Gamified Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Self-Paced</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject) => {
                const IconComponent = subject.icon;
                return (
                  <Card key={subject.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-br ${subject.color} relative`}>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute bottom-4 left-4">
                        <div className={`p-3 ${subject.bgColor} rounded-lg ${subject.iconColor}`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-2xl">{subject.name}</CardTitle>
                      <CardDescription className="text-base">
                        {subject.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Topics */}
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          {subject.topics.map((topic, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <p className="text-sm text-gray-500">Levels</p>
                          <p className="font-semibold">{subject.levels}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-semibold">{subject.duration}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-sm text-gray-500">Difficulty</p>
                        <p className="font-semibold">{subject.difficulty}</p>
                      </div>

                      {/* Action Button */}
                      <Link href={`/subjects/${subject.id}`} className="block">
                        <Button className={`w-full bg-gradient-to-r ${subject.color} text-white hover:opacity-90 group-hover:shadow-lg transition-all`}>
                          Start Learning
                          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ready to Start Your STEM Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are mastering STEM subjects through our interactive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Create Free Account
              </Button>
              <Button size="lg" variant="outline">
                Browse Demo Content
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}