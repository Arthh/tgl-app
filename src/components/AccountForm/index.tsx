import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Input from '../../UI/Input';

import {  Container, LogoTgl, FormTitle,
          FormBody, BorderBottom, FormInfos,
          ForgotText, ButtonLogin, ButtonSignUp } from './styles';

interface IAuthProps {
  clickHandler: (event: any) => (any);
}

interface FormData {
  name: string,
  email: string,
  password: string,
}

const AccountForm: React.FC<IAuthProps> = ({ clickHandler }) => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit:SubmitHandler<FormData> =  (data) => {
    console.log(data);
  }
  
  return (
    <Container>
      <FormInfos>
        <FormTitle> Account Info </FormTitle>
      </FormInfos>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
          <Input name="name"  />
          <Input name="email"  />
          <Input name="password"  />

          <TouchableOpacity>
            <ButtonLogin> Save <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>
    </Container>
  )
}


export default AccountForm;