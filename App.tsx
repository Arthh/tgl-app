import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/hooks/AuthContext';

import Routes from './src/routes';

// import Routes from './src/routes/teste.routes';


export default function App() {

  return (
    <NavigationContainer >
        <StatusBar style="auto" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </NavigationContainer>
  );
}