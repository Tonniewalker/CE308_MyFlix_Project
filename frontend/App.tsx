import { View, Text, FlatList, StatusBar, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import api from './api';
import MovieCard from './components/MovieCard';

interface Movie {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default function App() {
  // เก็บรายการหนังทั้งหมดที่โหลดมา
  const [movies, setMovies] = useState<Movie[]>([]);

  // เก็บหมายเลขหน้าปัจจุบัน (pagination)
  const [page, setPage] = useState(1);

  // เก็บสถานะว่าแอปกำลังโหลดข้อมูลอยู่หรือไม่
  const [loading, setLoading] = useState(false);

  // เก็บสถานะว่ายังมีข้อมูลหน้าใหม่ให้โหลดอีกไหม
  const [hasMore, setHasMore] = useState(true);

  // จำนวนหนังที่โหลดต่อหน้า
  const limit = 5;

  // ฟังก์ชันโหลดข้อมูลหนังหน้าแรก (ใช้ตอนเปิดแอป)
  const fetchInitialMovies = async () => {
    try {
      const res = await api.get(`/movies?page=1&limit=${limit}`);
      setMovies(res.data);
      setPage(1);
      setHasMore(res.data.length === limit); // ถ้าได้ครบ limit แสดงว่ายังมีหนังเหลือ
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  };

  // ฟังก์ชันโหลดข้อมูลหน้าถัดไป (เรียกเมื่อเลื่อนถึงท้าย FlatList)
  const loadMoreMovies = async () => {
    if (loading || !hasMore) return; // ถ้ายังโหลดอยู่ หรือไม่มีหน้าถัดไปแล้ว ให้หยุด

    setLoading(true);
    try {
      const nextPage = page + 1;
      const res = await api.get(`/movies?page=${nextPage}&limit=${limit}`);
      const newMovies = res.data;

      if (newMovies.length > 0) {
        // เพิ่มหนังใหม่เข้ารายการเดิม
        setMovies((prev) => [...prev, ...newMovies]);
        setPage(nextPage);
        setHasMore(newMovies.length === limit); // ถ้าได้น้อยกว่ากำหนด แสดงว่าไม่มีเพิ่มแล้ว
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error('Error loading more movies:', err);
    } finally {
      setLoading(false);
    }
  };

  // โหลดข้อมูลหน้าแรกเมื่อเปิดแอปครั้งแรก
  useEffect(() => {
    fetchInitialMovies();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <FlatList
        data={movies} // ข้อมูลหนังทั้งหมด
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            description={item.description}
            price={item.price}
          />
        )}
        onEndReached={loadMoreMovies} // โหลดหน้าถัดไปเมื่อเลื่อนถึงล่าง
        onEndReachedThreshold={0.5}   // เริ่มโหลดเมื่อเลื่อนใกล้ถึงล่าง 50%
      />
    </SafeAreaView>
  );
}
