import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/hooks/AuthContext';

import Routes from './src/routes';


export default function App() {

  return (
    <NavigationContainer >
      <AuthProvider>
        <StatusBar style="auto" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
