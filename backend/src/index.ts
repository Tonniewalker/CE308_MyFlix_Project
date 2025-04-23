import express from 'express';
import movieRoutes from './routes/movie-routes'; // เพิ่มเส้นทางของหนัง
import authRoutes from './routes/auth-routes';
import userRoutes from './routes/user-routes';

const app = express();
const PORT = 3000;

app.use(express.json()); // ให้ Express แปลง req.body เป็น JSON

app.use('/auth', authRoutes);

app.use('/users', userRoutes);

// (optional) route สำหรับเช็คว่าเซิร์ฟเวอร์ทำงานอยู่
app.get('/', (_req, res) => {
  res.send('Welcome to MyFlix API!');
});

// เชื่อม API สำหรับหนัง → http://localhost:3000/movies
app.use('/movies', movieRoutes);

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
