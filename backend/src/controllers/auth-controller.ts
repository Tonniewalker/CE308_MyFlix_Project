import { Request, Response } from 'express';
import * as authService from '../services/auth-service';

/**
 * สมัครสมาชิก (Register)
 * รับ email และ password จาก req.body
 * เรียกใช้ service เพื่อบันทึกผู้ใช้ใหม่
 * ตอบกลับด้วยข้อมูลผู้ใช้ (ไม่รวมรหัสผ่าน) และ message
 */
export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await authService.registerUser(email, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    res.status(400).json({ error: error.message }); // กรณีอีเมลซ้ำหรือข้อมูลไม่ถูกต้อง
  }
};

/**
 * ล็อกอิน (Login)
 * รับ email และ password จาก req.body
 * เรียกใช้ service เพื่อตรวจสอบผู้ใช้
 * หากสำเร็จส่ง JWT token และข้อมูลผู้ใช้กลับ
 */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await authService.loginUser(email, password);
    res.json({ message: 'Login successful', token, user });
  } catch (error: any) {
    res.status(401).json({ error: error.message }); // กรณีรหัสผ่านผิดหรือไม่พบอีเมล
  }
};
