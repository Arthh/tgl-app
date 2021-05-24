import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      initialRouteName='login'
      screenOptions={ { headerShown: false } }
    >
      <Auth.Screen name='login' component={Login} />
      <Auth.Screen name='signup' component={SignUp} />
      <Auth.Screen name='forgotpass' component={ForgotPass} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;