import React from 'react';
import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">STEM Platform</span>
            </Link>
            <p className="text-gray-300">
              Revolutionizing STEM education through gamification, VR/AR, and comprehensive learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Subjects', href: '/subjects' },
                { name: 'Tools', href: '/tools' },
                { name: 'Games', href: '/games' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Blog', href: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* STEM Subjects */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">STEM Subjects</h3>
            <ul className="space-y-2">
              {[
                { name: 'Mathematics', href: '/subjects/mathematics' },
                { name: 'Physics', href: '/subjects/physics' },
                { name: 'Chemistry', href: '/subjects/chemistry' },
                { name: 'Biology', href: '/subjects/biology' },
                { name: 'Computer Science', href: '/subjects/computer-science' },
                { name: 'Engineering', href: '/subjects/engineering' }
              ].map((subject) => (
                <li key={subject.name}>
                  <Link href={subject.href} className="text-gray-300 hover:text-white transition-colors">
                    {subject.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">info@stemplatform.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 STEM Education Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}