import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { CartProvider } from './src/context/CartProvider';


export default function App() {
  const [fontsLoaded] = useFonts({
    'tenorsans': require('./src/assets/fonts/tenorsans.ttf'),
  
  });
  
  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <CartProvider>
        <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </CartProvider>
      
  );
}