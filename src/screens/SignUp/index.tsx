import React from 'react';

import FirstFooter from '../../components/FirstFooter';
import SignUpForm from '../../components/SignUpForm';

import { Container } from './styles';

const SignUp: React.FC = () => {

  const handleSubmit = () => {
    console.log('alou');
  }

  return (
    <Container>
      <SignUpForm clickHandler={handleSubmit}/>
      <FirstFooter />
    </Container>
  );
}

export default SignUp;