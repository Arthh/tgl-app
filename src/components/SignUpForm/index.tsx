import React, { useRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';
import { AntDesign } from '@expo/vector-icons';

import Input from '../../UI/Input';

import {  Container, LogoTgl, FormTitle,
          FormBody, BorderBottom, FormInfos,
          ButtonLogin, ButtonSignUp } from './styles';
import { useNavigation } from '@react-navigation/native';

interface IAuthProps {
  clickHandler: (event: any) => (any);
}

interface FormData {
  name: string,
  email: string,
  password: string
}

const SignUpForm: React.FC<IAuthProps> = ({ clickHandler }) => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit:SubmitHandler<FormData> =  (data) => {
    console.log(data);
  }
  
  return (
    <Container>
      <FormInfos>
        <LogoTgl> TGL </LogoTgl>
        <BorderBottom />
        <FormTitle> Registration </FormTitle>
      </FormInfos>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
        <Input name="name" placeholder="Name" type="text" required />
          <Input name="email" placeholder="Email" type="email" required />
          <Input name="password" placeholder="Password" type="password" required />

          <TouchableOpacity>
            <ButtonLogin> Register <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>

      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <ButtonSignUp> <AntDesign name="arrowleft" size={30} color="#707070" /> Back </ButtonSignUp>
      </TouchableOpacity>
    </Container>
  )
}


export default SignUpForm;