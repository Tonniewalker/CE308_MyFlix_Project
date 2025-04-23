import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Middleware ตรวจสอบ JWT token ใน header
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  // ตรวจสอบว่ามี Bearer token มาหรือไม่
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // ตรวจสอบ token และแนบข้อมูล user ไปกับ req
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
    (req as any).user = decoded; // แนบข้อมูล user ไปใน req
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};
