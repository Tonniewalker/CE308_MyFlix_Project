import React from 'react';
import Navigation from './navigation';

export default function App() {
  return <Navigation />;
}
// import { View, Text, FlatList, StatusBar, SafeAreaView, ActivityIndicator } from 'react-native';
// import { useEffect, useState } from 'react';
// import api from './api';
// import MovieCard from './components/MovieCard';

// interface Movie {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// export default function App() {
//   // เก็บรายการหนังทั้งหมด
//   const [movies, setMovies] = useState<Movie[]>([]);

//   // หน้าปัจจุบันของการแบ่งหน้า
//   const [page, setPage] = useState(1);

//   // สถานะกำลังโหลดข้อมูล
//   const [loading, setLoading] = useState(false);

//   // สถานะว่ายังมีข้อมูลให้โหลดอีกไหม
//   const [hasMore, setHasMore] = useState(true);

//   // จำนวนรายการต่อหน้า
//   const limit = 5;

//   // โหลดรายการหนังหน้าแรก
//   const fetchInitialMovies = async () => {
//     try {
//       setLoading(true); // เริ่มแสดง loading
//       const res = await api.get(`/movies?page=1&limit=${limit}`);
//       setMovies(res.data); // เซ็ตข้อมูล
//       setPage(1); // เซ็ตหน้าเริ่มต้น
//       setHasMore(res.data.length === limit); // ถ้าได้ครบ limit แสดงว่าน่าจะมีหน้าถัดไป
//     } catch (err) {
//       console.error('Error fetching movies:', err);
//     } finally {
//       setLoading(false); // ซ่อน loading
//     }
//   };

//   // โหลดหน้าถัดไปเมื่อเลื่อนถึงท้ายรายการ
//   const loadMoreMovies = async () => {
//     if (loading || !hasMore) return; // หยุดถ้าโหลดอยู่หรือล่าสุดไม่มีข้อมูลแล้ว
//     setLoading(true);

//     try {
//       const nextPage = page + 1;
//       const res = await api.get(`/movies?page=${nextPage}&limit=${limit}`);
//       const newMovies = res.data;

//       if (newMovies.length > 0) {
//         setMovies((prev) => [...prev, ...newMovies]); // เพิ่มรายการใหม่ต่อท้าย
//         setPage(nextPage); // เพิ่มหมายเลขหน้า
//         setHasMore(newMovies.length === limit); // ถ้าได้น้อยกว่า limit แสดงว่าไม่มีหน้าใหม่แล้ว
//       } else {
//         setHasMore(false); // ไม่มีหนังเพิ่มแล้ว
//       }
//     } catch (err) {
//       console.error('Error loading more movies:', err);
//     } finally {
//       setLoading(false); // ซ่อน loading
//     }
//   };

//   // โหลดหน้าแรกตอนเปิดแอป
//   useEffect(() => {
//     fetchInitialMovies();
//   }, []);

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="dark-content" backgroundColor="white" />

//       <FlatList
//         data={movies} // ข้อมูลหนังทั้งหมด
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={{ padding: 16 }}
//         renderItem={({ item }) => (
//           <MovieCard
//             title={item.title}
//             description={item.description}
//             price={item.price}
//             imageUrl={item.imageUrl}
//           />
//         )}
//         onEndReached={loadMoreMovies} // โหลดหน้าถัดไปเมื่อเลื่อนถึงล่าง
//         onEndReachedThreshold={0.5}   // เริ่มโหลดเมื่อใกล้ถึงล่าง 50%
//         ListFooterComponent={
//           loading ? (
//             <ActivityIndicator size="small" color="#666" style={{ marginTop: 12 }} />
//           ) : null
//         }
//       />
//     </SafeAreaView>
//   );
// }


