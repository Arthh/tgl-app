import React, { useCallback } from 'react';

import * as Yup from 'yup'

import AuthForm from '../../components/AuthForm';
import FirstFooter from '../../components/FirstFooter';
import { useAuth } from '../../hooks/AuthContext';

import { Container } from './styles';

const Login: React.FC = () => {
   const { signIn } = useAuth();

   const handleProps = useCallback( async(userLogin: any) => {
     console.log(userLogin)
     return
    // await signIn(userLogin);

  },[signIn]);

  return (
    <Container>
      <AuthForm clickHandler={handleProps}/>
      <FirstFooter />
    </Container>
  );
}

export default Login;