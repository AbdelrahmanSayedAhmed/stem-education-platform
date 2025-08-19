import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Brain, 
  Gamepad2, 
  Calculator, 
  Atom, 
  Dna,
  Trophy,
  Users,
  Star,
  Zap,
  Rocket,
  Target,
  ChevronRight
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Revolutionize STEM Learning with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Gamification & VR/AR
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
              Comprehensive STEM education platform covering Grade 1 to university level with 
              interactive tools, immersive experiences, and gamified learning paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Start Learning Free
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Watch Demo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our STEM Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of education with cutting-edge technology and proven pedagogical approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gamepad2 className="h-8 w-8" />,
                title: "Gamification",
                description: "Earn points, badges, and level up as you master STEM concepts"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "VR/AR Labs",
                description: "Immersive virtual laboratories for hands-on experimentation"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Complete Curriculum",
                description: "Grade 1 to university level content across all STEM subjects"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Teachers",
                description: "Learn from qualified educators and industry professionals"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STEM Subjects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Master All STEM Subjects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of core STEM disciplines with interactive tools and real-world applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calculator className="h-12 w-12" />,
                title: "Mathematics",
                description: "From basic arithmetic to advanced calculus and beyond",
                color: "bg-purple-500",
                subjects: ["Algebra", "Geometry", "Calculus", "Statistics"]
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Physics",
                description: "Explore the fundamental laws of the universe",
                color: "bg-cyan-500",
                subjects: ["Mechanics", "Thermodynamics", "Electromagnetism", "Quantum"]
              },
              {
                icon: <Atom className="h-12 w-12" />,
                title: "Chemistry",
                description: "Discover the building blocks of matter",
                color: "bg-orange-500",
                subjects: ["Organic", "Inorganic", "Physical", "Analytical"]
              },
              {
                icon: <Dna className="h-12 w-12" />,
                title: "Biology",
                description: "Study life and living organisms",
                color: "bg-green-500",
                subjects: ["Genetics", "Ecology", "Anatomy", "Microbiology"]
              }
            ].map((subject, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`mx-auto mb-4 p-4 ${subject.color} text-white rounded-full w-fit group-hover:scale-110 transition-transform`}>
                    {subject.icon}
                  </div>
                  <CardTitle className="text-2xl text-center">{subject.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">
                    {subject.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {subject.subjects.map((topic, topicIndex) => (
                      <span key={topicIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification Preview */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Level Up Your Learning Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Trophy className="h-8 w-8" />,
                  title: "Earn Badges",
                  description: "Achievement badges for mastering concepts and completing challenges"
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Track Progress",
                  description: "Detailed analytics and progress tracking across all subjects"
                },
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "Compete & Collaborate",
                  description: "Leaderboards and team challenges with fellow learners"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-purple-100">{item.description}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Explore Gamification
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your STEM Education?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students and educators who are already experiencing the future of STEM learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
