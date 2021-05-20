import React from 'react';
import AccountForm from '../../components/AccountForm';
import Header from '../../components/Header';

import { Container } from './styles';

const Account: React.FC = () => {

  const handleSubmit = () => {
    console.log('alou');
  }

  return (
    <>
    <Header />
      <Container>
        <AccountForm clickHandler={handleSubmit}/>
      </Container>
    </>
  );
}

export default Account;