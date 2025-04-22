import { PrismaClient } from '@prisma/client';  // เรียกใช้ Prisma Client

const prisma = new PrismaClient(); // สร้างอินสแตนซ์ไว้ใช้เชื่อมกับฐานข้อมูล

// ฟังก์ชันดึงหนังทั้งหมดจากฐานข้อมูล (ไม่ใช้ pagination)
export const getAll = () => {
  return prisma.movie.findMany({
    orderBy: {
      id: 'asc', // เรียงจากน้อยไปมากเพื่อความเป็นระเบียบ
    },
  });
};

// ฟังก์ชันเพิ่มหนังใหม่ โดยรับข้อมูลจาก req.body
export const create = (data: {
  title: string;
  description: string;
  price: number;
  imageUrl: string; // เพิ่ม imageUrl ให้รองรับการบันทึกรูปภาพ
}) => {
  return prisma.movie.create({
    data, // Prisma จะ map key ใน data ให้ตรงกับฟิลด์ใน model Movie
  });
};

// ฟังก์ชันอัปเดตหนัง โดยระบุ id และข้อมูลใหม่
export const update = (id: number, data: {
  title?: string;
  description?: string;
  price?: number;
  imageUrl?: string; // อัปเดตรูปภาพได้
}) => {
  return prisma.movie.update({
    where: { id }, // WHERE id = ...
    data,
  });
};

// ฟังก์ชันลบหนังตาม id
export const remove = (id: number) => {
  return prisma.movie.delete({
    where: { id }, // WHERE id = ...
  });
};

// ฟังก์ชันสำหรับดึงรายการหนังแบบแบ่งหน้า (Pagination)
export const getMovies = async (page: number, limit: number) => {
  // คำนวณจำนวนรายการที่ต้องข้าม เช่น หน้า 2 ต้องข้าม 5 รายการแรก (ถ้า limit = 5)
  const skip = (page - 1) * limit;

  return prisma.movie.findMany({
    skip,        // ข้ามรายการ
    take: limit, // ดึงจำนวนรายการ
    orderBy: {
      id: 'asc', // เรียงลำดับตาม id จากน้อยไปมาก
    },
  });
};
