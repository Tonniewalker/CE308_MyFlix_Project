import { View, Text, FlatList, StatusBar, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import api from './api';

interface Movie {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const res = await api.get('/movies');
      setMovies(res.data);
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View className="mb-4 p-4 bg-white rounded-lg shadow">
            <Text className="text-xl font-bold mb-4">🎬 รายการหนัง</Text>
            <Text className="text-xl font-bold">{item.title}</Text>
            <Text className="text-gray-600">{item.description}</Text>
            <Text className="text-blue-500 font-semibold">฿ {item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
