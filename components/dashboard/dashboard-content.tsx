'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Calculator, 
  Trophy, 
  Target,
  TrendingUp,
  Users,
  Award,
  Clock,
  Star,
  Zap,
  Brain
} from 'lucide-react'
import Link from 'next/link'

export function Dashboard() {
  const user = {
    name: 'Alex Johnson',
    role: 'Student',
    level: 12,
    points: 2450,
    streak: 8,
    completedLessons: 45,
    totalLessons: 120
  }

  const recentActivity = [
    { subject: 'Mathematics', activity: 'Completed Quadratic Equations', time: '2 hours ago', points: 25 },
    { subject: 'Physics', activity: 'Started Newton&apos;s Laws', time: '1 day ago', points: 15 },
    { subject: 'Chemistry', activity: 'Finished Periodic Table Quiz', time: '2 days ago', points: 30 },
    { subject: 'Biology', activity: 'Explored Cell Structure', time: '3 days ago', points: 20 }
  ]

  const achievements = [
    { name: 'Math Master', description: 'Complete 50 math problems', icon: Calculator, earned: true, date: '2 days ago' },
    { name: 'Streak Keeper', description: 'Maintain 7-day learning streak', icon: Zap, earned: true, date: '1 week ago' },
    { name: 'Quiz Champion', description: 'Score 100% on any quiz', icon: Trophy, earned: true, date: '1 week ago' },
    { name: 'Lab Explorer', description: 'Complete 5 virtual labs', icon: Brain, earned: false, date: null }
  ]

  const subjects = [
    { name: 'Mathematics', progress: 75, color: 'bg-blue-500', nextLesson: 'Integration by Parts' },
    { name: 'Physics', progress: 60, color: 'bg-purple-500', nextLesson: 'Electromagnetic Waves' },
    { name: 'Chemistry', progress: 45, color: 'bg-green-500', nextLesson: 'Organic Reactions' },
    { name: 'Biology', progress: 30, color: 'bg-orange-500', nextLesson: 'DNA Replication' }
  ]

  return (
    <main className="py-12">
      <div className="container px-4 mx-auto">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Ready to continue your STEM learning journey? You&apos;re making great progress!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Level</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{user.level}</div>
              <p className="text-xs text-muted-foreground">
                350 XP to next level
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Points</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{user.points.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +75 from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Streak</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{user.streak} days</div>
              <p className="text-xs text-muted-foreground">
                Keep it up!
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{Math.round((user.completedLessons / user.totalLessons) * 100)}%</div>
              <p className="text-xs text-muted-foreground">
                {user.completedLessons}/{user.totalLessons} lessons
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Subject Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Subject Progress
              </CardTitle>
              <CardDescription>Your progress across all STEM subjects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjects.map((subject) => (
                <div key={subject.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{subject.name}</span>
                    <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${subject.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Next: {subject.nextLesson}
                  </p>
                </div>
              ))}
              <Button className="w-full mt-4" asChild>
                <Link href="/subjects">
                  Continue Learning
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest learning activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{activity.activity}</p>
                    <p className="text-sm text-muted-foreground">{activity.subject}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                      <span className="text-xs font-medium text-green-600">+{activity.points} pts</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Achievements
            </CardTitle>
            <CardDescription>Your learning milestones and accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.name}
                  className={`p-4 rounded-lg border-2 text-center ${
                    achievement.earned 
                      ? 'border-green-200 bg-green-50 dark:bg-green-950/20' 
                      : 'border-gray-200 bg-gray-50 dark:bg-gray-800/50 opacity-60'
                  }`}
                >
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    achievement.earned ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">{achievement.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                  {achievement.earned && (
                    <p className="text-xs text-green-600 font-medium mt-2">
                      Earned {achievement.date}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Jump into your most used tools and features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-auto p-4 flex-col space-y-2" variant="outline" asChild>
                <Link href="/tools/calculators">
                  <Calculator className="h-6 w-6" />
                  <span>Calculator</span>
                </Link>
              </Button>
              <Button className="h-auto p-4 flex-col space-y-2" variant="outline" asChild>
                <Link href="/subjects">
                  <BookOpen className="h-6 w-6" />
                  <span>Continue Learning</span>
                </Link>
              </Button>
              <Button className="h-auto p-4 flex-col space-y-2" variant="outline" asChild>
                <Link href="/community">
                  <Users className="h-6 w-6" />
                  <span>Join Community</span>
                </Link>
              </Button>
              <Button className="h-auto p-4 flex-col space-y-2" variant="outline" asChild>
                <Link href="/help">
                  <Target className="h-6 w-6" />
                  <span>Get Help</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}