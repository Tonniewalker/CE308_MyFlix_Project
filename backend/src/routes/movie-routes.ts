import { Router } from 'express';
import {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie
} from '../controllers/movie-controller';

const router = Router();

router.get('/', getAllMovies);           // ดึงหนังทั้งหมด
router.post('/', createMovie);           // เพิ่มหนังใหม่
router.put('/:id', updateMovie);         // แก้ไขหนังตาม id
router.delete('/:id', deleteMovie);      // ลบหนังตาม id

export default router;
