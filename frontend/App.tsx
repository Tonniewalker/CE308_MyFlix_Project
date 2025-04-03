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
          <MovieCard
            title={item.title}
            description={item.description}
            price={item.price}
          />
        )}
      />
    </SafeAreaView>
  );
}