import { Request, Response } from 'express';
import * as movieService from '../services/movie-service';

export const getAllMovies = async (_req: Request, res: Response) => {
  const movies = await movieService.getAll();
  res.json(movies);
};

export const createMovie = async (req: Request, res: Response) => {
  const movie = await movieService.create(req.body);
  res.json(movie);
};

export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await movieService.update(Number(id), req.body);
  res.json(movie);
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  await movieService.remove(Number(id));
  res.json({ message: 'Movie deleted' });
};

// GET /movies?page=1&limit=5
export const getMovies = async (req: Request, res: Response) => {
  try {
    // อ่าน page และ limit จาก query string พร้อมกำหนดค่า default
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    // เรียกใช้งาน service โดยส่ง page และ limit เข้าไป
    const movies = await movieService.getMovies(page, limit);

    // ตอบกลับด้วยข้อมูลรายการหนัง
    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};