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
