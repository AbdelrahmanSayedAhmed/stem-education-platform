import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Beaker, Microscope, Zap, Atom, ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Interactive Labs | STEM Education Platform',
  description: 'Discover our virtual laboratory experiences where students can conduct safe, interactive experiments in physics, chemistry, biology, and mathematics.',
}

export default function Labs() {
  const labCategories = [
    {
      icon: Beaker,
      title: 'Chemistry Labs',
      description: 'Conduct chemical reactions and explore molecular behavior in a safe virtual environment',
      experiments: ['Acid-Base Reactions', 'Organic Synthesis', 'Electrochemistry', 'Thermodynamics'],
      color: 'from-brand-yellow to-brand-blue'
    },
    {
      icon: Zap,
      title: 'Physics Labs',
      description: 'Experiment with forces, energy, waves, and quantum phenomena through interactive simulations',
      experiments: ['Wave Mechanics', 'Electromagnetic Fields', 'Optics', 'Quantum Physics'],
      color: 'from-brand-blue to-brand-teal'
    },
    {
      icon: Microscope,
      title: 'Biology Labs',
      description: 'Explore living systems from cellular level to ecosystem interactions with detailed models',
      experiments: ['Cell Division', 'Genetics', 'Ecosystem Dynamics', 'Human Physiology'],
      color: 'from-brand-teal to-brand-yellow'
    },
    {
      icon: Atom,
      title: 'Mathematics Labs',
      description: 'Visualize mathematical concepts through interactive graphs, models, and problem-solving tools',
      experiments: ['Calculus Visualization', 'Statistical Analysis', 'Geometric Proofs', 'Complex Numbers'],
      color: 'from-brand-yellow to-brand-blue'
    }
  ]

  const features = [
    {
      title: 'Safe Experimentation',
      description: 'No risk of dangerous chemical reactions or equipment damage - perfect for learning'
    },
    {
      title: 'Unlimited Resources',
      description: 'Access to expensive equipment and materials that may not be available in traditional labs'
    },
    {
      title: 'Instant Feedback',
      description: 'Real-time results and explanations help students understand cause and effect relationships'
    },
    {
      title: 'Repeatable Experiments',
      description: 'Run experiments multiple times to test hypotheses and observe patterns'
    },
    {
      title: 'Data Collection',
      description: 'Built-in tools for recording, analyzing, and visualizing experimental data'
    },
    {
      title: '24/7 Availability',
      description: 'Conduct experiments anytime, anywhere with just an internet connection'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 dark:from-brand-blue/10 dark:to-brand-teal/10">
        <div className="container px-4 py-24 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Interactive{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                Virtual Labs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of scientific education with our immersive virtual laboratories. 
              Conduct experiments, explore phenomena, and discover scientific principles in a 
              safe, interactive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Lab Philosophy</h2>
            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 rounded-2xl p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-6">
                We believe that hands-on experimentation is fundamental to understanding science. 
                Our virtual labs provide students with the opportunity to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-blue">Learn by Doing</h3>
                  <p className="text-muted-foreground">
                    Active participation in experiments helps students understand concepts better 
                    than passive observation or reading alone.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-teal">Develop Scientific Thinking</h3>
                  <p className="text-muted-foreground">
                    Students learn to form hypotheses, design experiments, collect data, 
                    and draw conclusions based on evidence.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-yellow">Explore Safely</h3>
                  <p className="text-muted-foreground">
                    Virtual environments allow students to explore dangerous or expensive 
                    experiments without physical risks or limitations.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-blue">Connect Theory to Practice</h3>
                  <p className="text-muted-foreground">
                    See how theoretical concepts apply to real-world situations through 
                    practical experimentation and observation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Categories */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lab Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {labCategories.map((lab, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                  <div className={`h-2 bg-gradient-to-r ${lab.color}`} />
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${lab.color} text-white`}>
                        <lab.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{lab.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {lab.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Available Experiments:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {lab.experiments.map((experiment, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Play className="h-3 w-3 text-brand-teal" />
                            <span className="text-sm">{experiment}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      Explore {lab.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Virtual Labs?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-brand-blue">{feature.title}</CardTitle>
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
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How to Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-teal rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold">Choose Your Subject</h3>
                <p className="text-muted-foreground">
                  Select from chemistry, physics, biology, or mathematics labs based on your learning goals.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-yellow rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold">Select an Experiment</h3>
                <p className="text-muted-foreground">
                  Browse available experiments and choose one that matches your current study topic.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold">Start Experimenting</h3>
                <p className="text-muted-foreground">
                  Follow guided instructions or explore freely to discover scientific principles firsthand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Experimenting?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Access our virtual labs and start your journey of scientific discovery today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/subjects">
                  Access Labs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}