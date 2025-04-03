import { View, Text } from 'react-native';

interface Props {
  title: string;
  description: string;
  price: number;
}

export default function MovieCard({ title, description, price }: Props) {
  return (
    <View className="mb-4 p-4 bg-white rounded-lg shadow">
      <Text className="text-xl font-bold mb-4">🎬 รายการหนัง</Text>
      <Text className="text-xl font-bold">{title}</Text>
      <Text className="text-gray-600">{description}</Text>
      <Text className="text-blue-500 font-semibold">฿ {price}</Text>
    </View>
  );
}