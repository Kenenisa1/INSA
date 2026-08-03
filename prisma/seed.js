import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  await prisma.reaction.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.answer.deleteMany();
  await prisma.question.deleteMany();
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.user.deleteMany();

  const tags = await Promise.all([
    prisma.tag.create({ data: { name: 'Next.js', slug: 'nextjs', description: 'React Framework for the Web' } }),
    prisma.tag.create({ data: { name: 'MongoDB', slug: 'mongodb', description: 'Document Database' } }),
    prisma.tag.create({ data: { name: 'Prisma', slug: 'prisma', description: 'Next-generation ORM' } }),
  ]);

  const trainerPassword = await bcrypt.hash('trainerpass', 12);
  const studentPassword = await bcrypt.hash('studentpass', 12);

  const trainer = await prisma.user.create({
    data: {
      name: 'Lead Trainer',
      email: 'trainer@insa.gov.et',
      password: trainerPassword,
      role: 'TRAINER',
    },
  });

  const student = await prisma.user.create({
    data: {
      name: 'Camp Student',
      email: 'student@insa.gov.et',
      password: studentPassword,
      role: 'STUDENT',
    },
  });

  await prisma.post.create({
    data: {
      title: 'Day 1: Intro to Next.js 16',
      content: 'Today I learned about the App Router, server components, and React server actions.',
      dayBadge: 1,
      authorId: student.id,
      tagIds: tags.map((t) => t.id),
    },
  });

  const question = await prisma.question.create({
    data: {
      title: 'How to revalidate cache in server actions?',
      content: 'I am using revalidatePath but not seeing updates. Any tips?',
      authorId: student.id,
      tagIds: [tags[0].id],
    },
  });

  await prisma.answer.create({
    data: {
      content: 'Use revalidatePath from next/cache inside your server action after mutation.',
      questionId: question.id,
      authorId: trainer.id,
      isAccepted: true,
    },
  });

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
