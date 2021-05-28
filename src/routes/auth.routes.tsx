import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPass';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#F7F7F7" }
      }}

    >
      <Auth.Screen name="signIn" component={SignIn} />
      <Auth.Screen name="signUp" component={SignUp} />
      <Auth.Screen name="forgotPass" component={ForgotPassword} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;