// import { View, Text } from 'react-native';

// interface Props {
//   title: string;
//   description: string;
//   price: number;
// }

// export default function MovieCard({ title, description, price }: Props) {
//   return (
//     <View className="mb-4 p-4 bg-white rounded-lg shadow">
//       <Text className="text-xl font-bold mb-4">🎬 รายการหนัง</Text>
//       <Text className="text-xl font-bold">{title}</Text>
//       <Text className="text-gray-600">{description}</Text>
//       <Text className="text-blue-500 font-semibold">฿ {price}</Text>
//     </View>
//   );
// }

import { View, Text, Image } from 'react-native'; // เพิ่ม Image สำหรับแสดงรูป
import React from 'react';

interface Props {
  title: string;
  description: string;
  price: number;
  imageUrl: string; // เพิ่ม prop imageUrl
}

export default function MovieCard({ title, description, price, imageUrl }: Props) {
  return (
    <View className="mb-4 p-4 bg-white rounded-lg shadow">
      {/* แสดงรูปภาพจาก URL ที่ได้จาก backend */}
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 8,
          marginBottom: 10,
        }}
        resizeMode="cover"
      />

      <Text className="text-xl font-bold">{title}</Text>
      <Text className="text-gray-600">{description}</Text>
      <Text className="text-blue-500 font-semibold">฿ {price}</Text>
    </View>
  );
}
