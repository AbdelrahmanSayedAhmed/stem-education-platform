'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  BookOpen,
  User,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              STEM Platform
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/subjects" className="text-foreground/60 hover:text-foreground transition-colors">
              Subjects
            </Link>
            <Link href="/tools" className="text-foreground/60 hover:text-foreground transition-colors">
              Tools
            </Link>
            <Link href="/games" className="text-foreground/60 hover:text-foreground transition-colors">
              Games
            </Link>
            <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/subjects" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Subjects
              </Link>
              <Link 
                href="/tools" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                href="/games" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Games
              </Link>
              <Link 
                href="/about" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button className="justify-start">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}