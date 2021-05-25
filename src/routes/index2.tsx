import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {useAuth} from '../hooks/AuthContext';

const Routes: React.FC = () => {
  const { data, loading } = useAuth();
 
  if(loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={100}   color="#B5C401"/>
      </View>
    )
  }

  return data.token? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;