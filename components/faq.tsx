'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "Is the platform free to use?",
      answer: "We offer a comprehensive free tier with access to basic calculators, select lessons, and community features. Premium subscriptions provide advanced tools, complete curriculum access, and priority support."
    },
    {
      question: "What grade levels does the curriculum cover?",
      answer: "Our curriculum spans from elementary school through university level, with age-appropriate content and adaptive difficulty levels for grades K-12 and beyond."
    },
    {
      question: "Can teachers use this platform for their classrooms?",
      answer: "Absolutely! We provide specialized teacher tools including lesson plans, progress tracking, classroom management features, and detailed analytics to support educators."
    },
    {
      question: "Do I need special software or equipment?",
      answer: "No additional software is required. Our platform works in any modern web browser on computers, tablets, and smartphones. Some advanced features may benefit from a larger screen."
    },
    {
      question: "How do I track my learning progress?",
      answer: "Our platform provides comprehensive progress tracking with visual dashboards, achievement badges, skill assessments, and personalized recommendations for continued learning."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our STEM education platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}