import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

// ควรเก็บ SECRET ไว้ใน .env แล้วเรียกผ่าน process.env.JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET || 'changeme'; // ใช้ค่าชั่วคราวหากไม่ได้ตั้งใน .env

export const registerUser = async (email: string, password: string) => {
  // ตรวจสอบว่า email นี้มีอยู่แล้วหรือไม่
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('Email is already registered');
  }

  // เข้ารหัสรหัสผ่านด้วย bcrypt
  const passwordHash = await bcrypt.hash(password, 10);

  // สร้าง user ใหม่
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  // หาผู้ใช้จาก email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // ตรวจสอบว่ารหัสผ่านตรงกับที่บันทึกไว้หรือไม่
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // สร้าง JWT token
  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '7d',
  });

  return { token, user };
};
