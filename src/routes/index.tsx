import React from 'react';

import { useAuth } from '../hooks/AuthContext';

import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {
  const { userLogged } = useAuth();
  const logged = userLogged();
  
  console.log(logged)

  return logged ? <App /> : <Auth />;
};

export default Routes;