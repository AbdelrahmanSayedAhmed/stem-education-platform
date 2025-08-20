# STEM Education Platform

A comprehensive, production-ready STEM education platform built with Next.js 15, TypeScript, and Tailwind CSS. Features interactive learning, scientific calculator, gamification, and user role management.

## 🚀 Features

### Core Features
- **Interactive Learning**: Mathematics, Physics, Chemistry, and Biology modules
- **Scientific Calculator**: Full-featured calculator with memory functions and history
- **User Roles**: Student, Teacher, Admin, and Tutor dashboards
- **Gamification**: Points, badges, achievements, and leaderboards
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

### Technical Features
- **Next.js 15**: App Router with server-side rendering
- **TypeScript**: Type-safe development
- **Prisma ORM**: Database management with SQLite
- **NextAuth.js**: Authentication ready
- **Performance**: Optimized images and lazy loading
- **SEO**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM with SQLite
- **Authentication**: NextAuth.js (ready to configure)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-optimized

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── subjects/                # Subject pages (Math, Physics, etc.)
│   ├── tools/calculators/       # Scientific calculator
│   ├── dashboard/              # User dashboard
│   └── layout.tsx              # Root layout
├── components/                  # Reusable components
│   ├── ui/                     # shadcn/ui components
│   ├── subjects/               # Subject-specific components
│   ├── calculators/            # Calculator components
│   └── dashboard/              # Dashboard components
├── lib/                        # Utilities
│   ├── prisma.ts              # Database client
│   └── utils.ts               # Helper functions
├── prisma/                     # Database schema
│   └── schema.prisma          # Database models
└── public/                     # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdelrahmanSayedAhmed/stem-education-platform.git
   cd stem-education-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration.

4. **Initialize the database**
   ```bash
   npm run db:push
   npm run db:generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📚 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema
npm run db:generate  # Generate Prisma client
npm run db:studio    # Open Prisma Studio
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy** - Vercel will automatically build and deploy

The platform is optimized for zero-config Vercel deployment.

### Environment Variables

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth (for authentication)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL_INTERNAL="http://localhost:3000"
```

For production, update URLs accordingly.

## 🎯 Key Pages

- **Home**: `/` - Landing page with features and subject overview
- **Subjects**: `/subjects` - All STEM subjects with progress tracking
- **Mathematics**: `/subjects/mathematics` - Interactive math learning
- **Physics**: `/subjects/physics` - Physics experiments and theory
- **Calculator**: `/tools/calculators` - Advanced scientific calculator
- **Dashboard**: `/dashboard` - User progress and achievements

## 🔧 Database Schema

The platform includes comprehensive database models for:
- **Users**: Role-based access (Student, Teacher, Admin, Tutor)
- **Subjects & Topics**: Organized learning content
- **Progress Tracking**: Individual learning progress
- **Achievements**: Gamification system
- **Calculator History**: Calculation storage

## 🎮 Gamification Features

- **Points System**: Earn points for completed activities
- **Achievements**: Unlock badges for milestones
- **Progress Tracking**: Visual progress indicators
- **Leaderboards**: Compete with other learners
- **Streaks**: Maintain daily learning streaks

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect tablet experience
- **Desktop**: Full-featured desktop interface
- **Touch Friendly**: Optimized for touch interactions

## 🔐 Security & Performance

- **Type Safety**: Full TypeScript implementation
- **Input Validation**: Secure form handling
- **Optimized Images**: Next.js image optimization
- **Lazy Loading**: Performance optimizations
- **Error Boundaries**: Graceful error handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Prisma](https://prisma.io/) - Next-generation ORM
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

## 📞 Support

For support, email support@stemplatform.edu or create an issue in this repository.

---

Built with ❤️ for STEM education
