import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Additional logic can be added here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl
        
        // Admin routes protection
        if (pathname.startsWith('/admin')) {
          return token?.role === 'ADMIN'
        }
        
        // Protected routes that require authentication
        if (pathname.startsWith('/dashboard') || pathname.startsWith('/settings')) {
          return !!token
        }
        
        return true
      },
    },
    pages: {
      signIn: '/sign-in',
    },
  }
)

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/settings/:path*'
  ]
}