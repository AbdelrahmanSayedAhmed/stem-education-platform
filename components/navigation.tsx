'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { 
  Menu, 
  X,
  GraduationCap
} from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Subjects', href: '/subjects' },
    { name: 'About', href: '/about' },
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Labs', href: '/labs' },
    { name: 'Tools', href: '/tools/calculators/scientific' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              STEM Platform
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-secondary text-foreground/80 hover:text-secondary focus:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile navigation */}
        <div className="flex w-full items-center md:hidden">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold">STEM Platform</span>
          </Link>
          <div className="ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search functionality can be added here */}
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <Sheet isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6" />
              <span>STEM Platform</span>
            </SheetTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </SheetHeader>
          
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium transition-colors hover:text-secondary text-foreground/80 focus:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t">
              <div className="flex flex-col space-y-3">
                <Button variant="ghost" asChild className="justify-start">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                </Button>
                <Button asChild className="justify-start">
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}