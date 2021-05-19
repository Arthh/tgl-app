import React from 'react';

import FirstFooter from '../../components/FirstFooter';
import ForgotPassForm from '../../components/ForgotPassForm';

import { Container } from './styles';

const ForgotPass: React.FC = () => {

  const handleSubmit = () => {
    console.log('alou');
  }

  return (
    <Container>
      <ForgotPassForm clickHandler={handleSubmit}/>
      <FirstFooter />
    </Container>
  );
}

export default ForgotPass;