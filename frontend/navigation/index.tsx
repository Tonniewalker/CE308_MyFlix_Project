import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'; // ✅ ใช้ HomeScreen แทน App
import MovieDetailScreen from '../screens/MovieDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  MovieDetail: {
    title: string;
    description: string;
    price: number;
    imageUrl?: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'MyFlix' }} // คุณสามารถตั้งชื่อหัวข้อหน้าแรกได้ที่นี่
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{ title: 'รายละเอียดหนัง' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
