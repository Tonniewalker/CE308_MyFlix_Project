import { Request, Response } from 'express';
import * as movieService from '../services/movie-service'; // เรียกใช้ฟังก์ชันจาก service ทั้งหมด

// ดึงรายการหนังทั้งหมด (ใช้ในกรณีไม่ได้แบ่งหน้า)
export const getAllMovies = async (_req: Request, res: Response) => {
  const movies = await movieService.getAll();
  res.json(movies);
};

// เพิ่มหนังใหม่ โดยรับ title, description, price, imageUrl จาก req.body
export const createMovie = async (req: Request, res: Response) => {
  const { title, description, price, imageUrl } = req.body;

  const movie = await movieService.create({
    title,
    description,
    price,
    imageUrl, // เพิ่มฟิลด์รูปภาพ
  });

  res.json(movie);
};

// แก้ไขข้อมูลหนังตาม ID โดยอัปเดตข้อมูลจาก req.body
export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, price, imageUrl } = req.body;

  const movie = await movieService.update(Number(id), {
    title,
    description,
    price,
    imageUrl, // รองรับการอัปเดตรูปภาพ
  });

  res.json(movie);
};

// ลบหนังตาม ID
export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  await movieService.remove(Number(id));
  res.json({ message: 'Movie deleted' });
};

// ดึงรายการหนังแบบแบ่งหน้า (pagination) โดยใช้ query ?page=1&limit=5
export const getMovies = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;     // หน้าเริ่มต้น
    const limit = parseInt(req.query.limit as string) || 10;  // จำนวนหนังต่อหน้า

    const movies = await movieService.getMovies(page, limit);
    res.json(movies); // ส่งข้อมูลหนังกลับไป
  } catch (err) {
    console.error('Error fetching movies:', err);
    res.status(500).json({ error: 'Internal server error' }); // ส่ง error กลับ
  }
};
