import { PrismaClient } from '@prisma/client';  // เรียกใช้ Prisma Client

const prisma = new PrismaClient(); // สร้างอินสแตนซ์ไว้ใช้เชื่อมกับฐานข้อมูล

// ฟังก์ชันดึงหนังทั้งหมดจากฐานข้อมูล
export const getAll = () => {
  return prisma.movie.findMany();  // SELECT * FROM Movie
};

// ฟังก์ชันเพิ่มหนังใหม่ โดยรับข้อมูลจาก req.body
export const create = (data: any) => {
  return prisma.movie.create({
    data,  // Prisma จะ map key ใน data ให้ตรงกับฟิลด์ใน model Movie
  });
};

// ฟังก์ชันอัปเดตหนัง โดยระบุ id และข้อมูลใหม่
export const update = (id: number, data: any) => {
  return prisma.movie.update({
    where: { id },  // WHERE id = ...
    data,
  });
};

// ฟังก์ชันลบหนังตาม id
export const remove = (id: number) => {
  return prisma.movie.delete({
    where: { id },  // WHERE id = ...
  });
};

// ฟังก์ชันสำหรับดึงรายการหนังแบบแบ่งหน้า (Pagination)
export const getMovies = async (page: number, limit: number) => {
  // คำนวณจำนวนรายการที่ต้องข้าม เช่น หน้า 2 ต้องข้าม 10 รายการแรก (ถ้า limit = 10)
  const skip = (page - 1) * limit;

  // ใช้ Prisma ดึงรายการหนังจากฐานข้อมูลแบบแบ่งหน้า
  return prisma.movie.findMany({
    skip,          // ข้ามกี่รายการ
    take: limit,   // ดึงมากี่รายการ
    orderBy: {
      id: 'asc',   // เรียงลำดับหนังตาม id จากน้อยไปมาก
    },
  });
};