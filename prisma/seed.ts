import { PrismaClient, UserRole, SubjectCategory, Difficulty, BadgeCategory, ToolType, GameType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create Subjects
  const subjects = await Promise.all([
    prisma.subject.upsert({
      where: { slug: 'mathematics' },
      update: {},
      create: {
        name: 'Mathematics',
        slug: 'mathematics',
        description: 'Master mathematical concepts from basic arithmetic to advanced calculus',
        icon: 'Calculator',
        color: '#8b5cf6',
        category: SubjectCategory.MATHEMATICS,
      },
    }),
    prisma.subject.upsert({
      where: { slug: 'physics' },
      update: {},
      create: {
        name: 'Physics',
        slug: 'physics',
        description: 'Explore the fundamental laws that govern our universe',
        icon: 'Zap',
        color: '#06b6d4',
        category: SubjectCategory.PHYSICS,
      },
    }),
    prisma.subject.upsert({
      where: { slug: 'chemistry' },
      update: {},
      create: {
        name: 'Chemistry',
        slug: 'chemistry',
        description: 'Discover the building blocks of matter and their interactions',
        icon: 'Atom',
        color: '#f97316',
        category: SubjectCategory.CHEMISTRY,
      },
    }),
    prisma.subject.upsert({
      where: { slug: 'biology' },
      update: {},
      create: {
        name: 'Biology',
        slug: 'biology',
        description: 'Study life and living organisms in all their complexity',
        icon: 'Dna',
        color: '#22c55e',
        category: SubjectCategory.BIOLOGY,
      },
    }),
    prisma.subject.upsert({
      where: { slug: 'computer-science' },
      update: {},
      create: {
        name: 'Computer Science',
        slug: 'computer-science',
        description: 'Learn programming, algorithms, and computational thinking',
        icon: 'Computer',
        color: '#6366f1',
        category: SubjectCategory.COMPUTER_SCIENCE,
      },
    }),
  ])

  console.log(`✅ Created ${subjects.length} subjects`)

  // Create sample badges
  const badges = await Promise.all([
    prisma.badge.upsert({
      where: { name: 'First Steps' },
      update: {},
      create: {
        name: 'First Steps',
        description: 'Complete your first lesson',
        icon: 'Star',
        color: '#fbbf24',
        category: BadgeCategory.MILESTONE,
        pointsRequired: 0,
      },
    }),
    prisma.badge.upsert({
      where: { name: 'Math Wizard' },
      update: {},
      create: {
        name: 'Math Wizard',
        description: 'Solve 100 math problems correctly',
        icon: 'Calculator',
        color: '#8b5cf6',
        category: BadgeCategory.SUBJECT_MASTERY,
        pointsRequired: 1000,
      },
    }),
    prisma.badge.upsert({
      where: { name: 'Physics Explorer' },
      update: {},
      create: {
        name: 'Physics Explorer',
        description: 'Complete 10 physics experiments',
        icon: 'Zap',
        color: '#06b6d4',
        category: BadgeCategory.SUBJECT_MASTERY,
        pointsRequired: 500,
      },
    }),
  ])

  console.log(`✅ Created ${badges.length} badges`)

  // Create sample topics for Mathematics
  const mathSubject = subjects.find(s => s.slug === 'mathematics')
  if (mathSubject) {
    const topics = await Promise.all([
      prisma.topic.upsert({
        where: { subjectId_slug: { subjectId: mathSubject.id, slug: 'basic-arithmetic' } },
        update: {},
        create: {
          title: 'Basic Arithmetic',
          slug: 'basic-arithmetic',
          description: 'Learn addition, subtraction, multiplication, and division',
          content: {
            introduction: 'Master the fundamental operations of mathematics',
            sections: [
              {
                title: 'Addition',
                content: 'Learn how to add numbers together',
                examples: ['2 + 3 = 5', '10 + 15 = 25']
              },
              {
                title: 'Subtraction',
                content: 'Learn how to subtract numbers',
                examples: ['10 - 3 = 7', '25 - 15 = 10']
              }
            ]
          },
          difficulty: Difficulty.BEGINNER,
          subjectId: mathSubject.id,
          order: 1,
        },
      }),
      prisma.topic.upsert({
        where: { subjectId_slug: { subjectId: mathSubject.id, slug: 'algebra-basics' } },
        update: {},
        create: {
          title: 'Algebra Basics',
          slug: 'algebra-basics',
          description: 'Introduction to variables, expressions, and equations',
          content: {
            introduction: 'Learn the basics of algebraic thinking',
            sections: [
              {
                title: 'Variables',
                content: 'Understanding what variables represent',
                examples: ['x = 5', 'y = 2x + 3']
              }
            ]
          },
          difficulty: Difficulty.INTERMEDIATE,
          subjectId: mathSubject.id,
          order: 2,
        },
      }),
    ])

    console.log(`✅ Created ${topics.length} math topics`)
  }

  // Create sample tools
  const tools = await Promise.all([
    prisma.tool.upsert({
      where: { slug: 'scientific-calculator' },
      update: {},
      create: {
        name: 'Scientific Calculator',
        slug: 'scientific-calculator',
        description: 'Advanced calculator with scientific functions',
        type: ToolType.CALCULATOR,
        subjectId: mathSubject!.id,
      },
    }),
    prisma.tool.upsert({
      where: { slug: 'graphing-calculator' },
      update: {},
      create: {
        name: 'Graphing Calculator',
        slug: 'graphing-calculator',
        description: 'Plot and analyze mathematical functions',
        type: ToolType.GRAPHING,
        subjectId: mathSubject!.id,
      },
    }),
  ])

  console.log(`✅ Created ${tools.length} tools`)

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })