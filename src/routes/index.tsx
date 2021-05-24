import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/AuthContext';

const Routes: React.FC = () => {
  const {userLogged} = useAuth();

  return userLogged? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;