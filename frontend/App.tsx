import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import api from './api';

interface Movie {
  id: number;
  title: string;
  description: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get('/movies');
        setMovies(res.data);
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-xl font-bold mb-4">🎬 รายการหนัง</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="mb-3 p-3 bg-gray-100 rounded-xl w-full">
            <Text className="text-lg font-bold">{item.title}</Text>
            <Text>{item.description}</Text>
            <Text className="text-blue-600 mt-1">฿ {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
