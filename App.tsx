import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ForgotPass from './src/screens/ForgotPass';
import Home from './src/screens/Home';


export default function App() {

  return (
    <View >
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}
