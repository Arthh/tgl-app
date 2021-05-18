import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthForm from './src/components/AuthForm';


export default function App() {
  const alertShow = () => {
   return
  }

  return (
    <View >
      <StatusBar style="auto" />
      <AuthForm clickHandler={() => {}} />
    </View>
  );
}
