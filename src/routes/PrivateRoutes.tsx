import React from 'react';
import { useAuth } from '../hooks/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = createBottomTabNavigator();

interface RoutesPropsData {
  name: any;
  component: any;
}


const PrivateRoutes: React.FC<RoutesPropsData> = ({name, component }) => {
  const { userLogged } = useAuth();

  return userLogged() ? <App.Screen name={name} component={component} /> : null;
};

export default PrivateRoutes