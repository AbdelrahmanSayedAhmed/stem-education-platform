import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { SignInButtons } from '@/components/auth/SignInButtons'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Sign Up | STEM Learning Platform',
  description: 'Create your STEM learning account',
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">Get Started</h1>
              <p className="text-muted-foreground mt-2">
                Create your account and begin your STEM learning journey
              </p>
            </div>
            <SignInButtons />
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}