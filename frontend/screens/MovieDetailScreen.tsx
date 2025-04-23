// import { View, Text, Image, ScrollView } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// export default function MovieDetailScreen() {
//   const route = useRoute();
//   const { movie } = route.params as {
//     movie: {
//       title: string;
//       description: string;
//       price: number;
//       imageUrl?: string;
//     };
//   };

//   return (
//     <ScrollView contentContainerStyle={{ padding: 20 }}>
//       {movie.imageUrl && (
//         <Image
//           source={{ uri: movie.imageUrl }}
//           style={{ width: '100%', height: 250, borderRadius: 10, marginBottom: 16 }}
//           resizeMode="cover"
//         />
//       )}
//       <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{movie.title}</Text>
//       <Text style={{ fontSize: 16, color: 'gray', marginVertical: 10 }}>{movie.description}</Text>
//       <Text style={{ fontSize: 18, color: '#007AFF', fontWeight: 'bold' }}>฿ {movie.price}</Text>
//     </ScrollView>
//   );
// }

import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation';

type MovieDetailRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

export default function MovieDetailScreen() {
  const route = useRoute<MovieDetailRouteProp>();
  const { title, description, price, imageUrl } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: '100%',
            height: 250,
            borderRadius: 10,
            marginBottom: 16,
          }}
          resizeMode="cover"
        />
      )}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
      <Text style={{ fontSize: 16, color: '#555', marginBottom: 10 }}>{description}</Text>
      <Text style={{ fontSize: 18, color: '#2e86de', fontWeight: 'bold' }}>฿ {price}</Text>
    </ScrollView>
  );
}
