import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { SignInButtons } from '@/components/auth/SignInButtons'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Sign In | STEM Learning Platform',
  description: 'Sign in to your STEM learning account',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md">
            <SignInButtons />
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link
                href="/sign-up"
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}