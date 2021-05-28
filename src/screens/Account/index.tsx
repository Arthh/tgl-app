import React, { useEffect, useState } from 'react';
import AccountForm from '../../components/AccountForm';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container } from './styles';

const Account: React.FC = () => {
  const [user, setUser] = useState({})
  
  const loadAllUserInfos = async() =>{
    try {
      const response = await api.get('/users/myinfo');
      setUser(response.data);
    }catch (err){
      alert('Erro ao recuperar informações, tente novamente mais tarde!');
    }
  }
  
    useEffect(() => {
      loadAllUserInfos();
    },[]);


 

  return (
    <>
    <Header />
      <Container>
        {user && <AccountForm user={user} />}
      </Container>
    </>
  );
}

export default Account;