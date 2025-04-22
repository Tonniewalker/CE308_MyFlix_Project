import { Router } from 'express';
import {
  getAllMovies, //(รายการหนังแบบไม่แบ่งหน้า)
  createMovie,
  updateMovie,
  deleteMovie,
  getMovies
} from '../controllers/movie-controller';

const router = Router();

router.get('/', getMovies);           // ดึงหนังทั้งหมด
router.post('/', createMovie);           // เพิ่มหนังใหม่
router.put('/:id', updateMovie);         // แก้ไขหนังตาม id
router.delete('/:id', deleteMovie);      // ลบหนังตาม id

export default router;
