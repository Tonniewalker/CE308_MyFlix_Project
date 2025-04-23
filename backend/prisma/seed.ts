import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.movie.deleteMany(); // ล้างข้อมูลเก่าก่อน seed ใหม่
    
  await prisma.movie.createMany({
    data: [
      { title: 'Avengers', description: 'Superhero team-up action movie', price: 150, isAvailable: true,
        imageUrl: 'https://th.bing.com/th/id/R.b75ee6edfc1c479fa096d37805169071?rik=XLreWgJRO43iEQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f9%2f8%2f8%2f529635.jpg&ehk=lkXQwx%2bk5jS%2fs0%2fU88H54hwltHjnGNHIl%2bURmFf8b88%3d&risl=&pid=ImgRaw&r=0'
       },

      { title: 'Interstellar', description: 'Epic science fiction journey', price: 200, isAvailable: true,
        imageUrl: 'https://image.tmdb.org/t/p/original/djS3XxneEFjCM6VlCiuuN8QavE6.jpg'
      },

      { title: 'Titanic', description: 'Romantic tragedy at sea', price: 180, isAvailable: true,
        imageUrl: 'https://www.hdmoviesource.com/v/vspfiles/photos/15312-1.jpg??'},

      { title: 'The Dark Knight', description: 'Batman faces Joker', price: 170, isAvailable: true,
        imageUrl: 'https://lotpeak.com/wp-content/uploads/2023/11/tdk-1024x1024-1.jpg' },

      { title: 'Inception', description: 'Dreams within dreams', price: 190, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/574/531/642/2010-inception-movie-inception-poster-wallpaper-preview.jpg' },

      { title: 'Forrest Gump', description: 'Life story of an extraordinary man', price: 160, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/539/710/449/movies-forrest-gump-wallpaper-preview.jpg' },

      { title: 'The Matrix', description: 'Virtual reality rebellion', price: 170, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/473/226/342/the-matrix-movies-the-matrix-revolutions-neo-keanu-reeves-carrie-anne-moss-trinity-wallpaper-preview.jpg' },

      { title: 'Gladiator', description: 'Roman general\'s revenge', price: 180, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/788/565/141/crowe-gladiator-movie-movies-wallpaper-preview.jpg' },

      { title: 'Joker', description: 'Psychological exploration of a villain', price: 160, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/267/666/423/joker-2019-movie-joker-joaquin-phoenix-movies-dancing-hd-wallpaper-preview.jpg' },

      { title: 'Coco', description: 'Colorful journey through the afterlife', price: 140, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/319/817/285/coco-miguel-hector-animation-wallpaper-preview.jpg' },

      { title: 'Frozen', description: 'Magical kingdom of Arendelle', price: 150, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/982/197/150/frozen-2013-poster-anna-movie-wallpaper-preview.jpg' },

      { title: 'Avatar', description: 'Journey to Pandora', price: 200, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/123/991/646/avatar-blue-skin-james-cameron-s-movie-avatar-movie-poster-wallpaper-preview.jpg' },

      { title: 'The Lion King', description: 'Epic tale of Simba', price: 160, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/492/705/297/disney-movie-the-lion-king-disney-lion-king-dvd-wallpaper-preview.jpg' },

      { title: 'Toy Story', description: 'Toys come to life', price: 150, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/250/197/116/toy-story-2-characters-hd-wallpaper-wallpaper-preview.jpg' },

      { title: 'Finding Nemo', description: 'Adventure under the sea', price: 150, isAvailable: true,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/99/146/327/movies-finding-nemo-shark-movie-poster-wallpaper-preview.jpg' },
  
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