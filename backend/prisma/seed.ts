import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.movie.deleteMany(); // ล้างข้อมูลเก่าก่อน seed ใหม่
    
  await prisma.movie.createMany({
    data: [
      { title: 'Avengers', description: 'Superhero team-up action movie', price: 150, isAvailable: true },
      { title: 'Interstellar', description: 'Epic science fiction journey', price: 200, isAvailable: true },
      { title: 'Titanic', description: 'Romantic tragedy at sea', price: 180, isAvailable: true },
      { title: 'The Dark Knight', description: 'Batman faces Joker', price: 170, isAvailable: true },
      { title: 'Inception', description: 'Dreams within dreams', price: 190, isAvailable: true },
      { title: 'Forrest Gump', description: 'Life story of an extraordinary man', price: 160, isAvailable: true },
      { title: 'The Matrix', description: 'Virtual reality rebellion', price: 170, isAvailable: true },
      { title: 'Gladiator', description: 'Roman general\'s revenge', price: 180, isAvailable: true },
      { title: 'Joker', description: 'Psychological exploration of a villain', price: 160, isAvailable: true },
      { title: 'Coco', description: 'Colorful journey through the afterlife', price: 140, isAvailable: true },
      { title: 'Frozen', description: 'Magical kingdom of Arendelle', price: 150, isAvailable: true },
      { title: 'Avatar', description: 'Journey to Pandora', price: 200, isAvailable: true },
      { title: 'The Lion King', description: 'Epic tale of Simba', price: 160, isAvailable: true },
      { title: 'Toy Story', description: 'Toys come to life', price: 150, isAvailable: true },
      { title: 'Finding Nemo', description: 'Adventure under the sea', price: 150, isAvailable: true },
    ],
  });

  console.log(' Seed completed: หนังถูกเพิ่มเรียบร้อยแล้ว');
}

main()
  .catch((e) => {
    console.error(' Seed failed', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());