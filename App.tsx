import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Home from './src/screens/Home';
import AuthRoutes from './src/routes/auth.routes';
import AppRoutes from './src/routes/app.routes';


export default function App() {

  return (
    <NavigationContainer >
      <StatusBar style="auto" />
      <AppRoutes />
    </NavigationContainer>
  );
}
