import { Request, Response } from 'express';
import * as movieService from '../services/movie-service'; // import service ทั้งหมด

// ดึงหนังทั้งหมด (ใช้ในกรณีที่ไม่แบ่งหน้า)
export const getAllMovies = async (_req: Request, res: Response) => {
  const movies = await movieService.getAll();
  res.json(movies);
};

// เพิ่มหนังใหม่
export const createMovie = async (req: Request, res: Response) => {
  const movie = await movieService.create(req.body);
  res.json(movie);
};

// แก้ไขข้อมูลหนัง
export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await movieService.update(Number(id), req.body);
  res.json(movie);
};

// ลบหนังตาม ID
export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  await movieService.remove(Number(id));
  res.json({ message: 'Movie deleted' });
};

// ดึงรายการหนังแบบแบ่งหน้า (Pagination)
export const getMovies = async (req: Request, res: Response) => {
  try {
    // อ่าน page และ limit จาก query string (ถ้าไม่ส่งมาจะใช้ค่า default)
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    // เรียกใช้งาน service โดยส่ง page และ limit
    const movies = await movieService.getMovies(page, limit);

    // ตอบกลับด้วยข้อมูลรายการหนัง
    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
