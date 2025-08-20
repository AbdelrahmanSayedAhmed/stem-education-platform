'use client'

import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  User, 
  LogOut, 
  Settings, 
  Shield, 
  ChevronDown 
} from 'lucide-react'

export function UserMenu() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (!session?.user) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
    )
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  const userInitials = session.user.name
    ? session.user.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : session.user.email?.[0]?.toUpperCase() || 'U'

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 px-3"
      >
        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
          {session.user.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || 'User'}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            userInitials
          )}
        </div>
        <span className="hidden md:block">{session.user.name}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <div className="font-medium">{session.user.name}</div>
            <div className="text-sm text-muted-foreground">{session.user.email}</div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {session.user.role}
              </span>
              <span className="text-xs text-muted-foreground">
                Level {session.user.level} • {session.user.points} points
              </span>
            </div>
          </div>
          
          <div className="py-2">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-sm hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4 mr-3" />
              Dashboard
            </Link>

            {session.user.role === 'ADMIN' && (
              <Link
                href="/admin"
                className="flex items-center px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="h-4 w-4 mr-3" />
                Admin Dashboard
              </Link>
            )}

            <Link
              href="/settings"
              className="flex items-center px-4 py-2 text-sm hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </Link>
          </div>

          <div className="border-t border-border py-2">
            <button
              onClick={handleSignOut}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/10 transition-colors w-full text-left"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}