import express from 'express';
import * as authController from '../controllers/auth-controller';

const router = express.Router();

// Route สำหรับสมัครสมาชิก
// Endpoint: POST /auth/register
router.post('/register', authController.register);

// Route สำหรับเข้าสู่ระบบ
// Endpoint: POST /auth/login
router.post('/login', authController.login);

export default router;
