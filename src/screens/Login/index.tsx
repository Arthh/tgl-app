import React from 'react';

import AuthForm from '../../components/AuthForm';
import FirstFooter from '../../components/FirstFooter';

import { Container } from './styles';

const Login: React.FC = () => {

  const handleSubmit = () => {
    console.log('alou');
  }

  return (
    <Container>
      <AuthForm clickHandler={handleSubmit}/>
      <FirstFooter />
    </Container>
  );
}

export default Login;