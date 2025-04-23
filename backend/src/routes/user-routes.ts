import express from 'express';
import { authenticateToken } from '../middleware/auth-middleware';

const router = express.Router();

/**
 * GET /users/me
 * ต้องส่ง token แนบมาใน header
 * คืนข้อมูลผู้ใช้ที่กำลัง login อยู่
 */
router.get('/me', authenticateToken, (req, res) => {
  const user = (req as any).user; // มาจาก middleware ที่แนบไว้ใน req
  res.json({ message: 'Authenticated user', user });
});

export default router;
