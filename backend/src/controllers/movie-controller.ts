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
