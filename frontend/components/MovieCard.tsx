import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation'; // 👈 import จาก index.tsx

interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

// ตั้ง type ของ navigation เพื่อใช้กับ useNavigation
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function MovieCard({ id, title, description, price, imageUrl }: Props) {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    // ส่งข้อมูลทั้งหมดไปยัง MovieDetail
    navigation.navigate('MovieDetail', {
      title,
      description,
      price,
      imageUrl,
    });
  };

  return (
    <Pressable onPress={handlePress} className="mb-4 p-4 bg-white rounded-lg shadow">
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
    </Pressable>
  );
}
