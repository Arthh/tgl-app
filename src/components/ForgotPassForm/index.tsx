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
  email: string
}

const ForgotPassForm: React.FC<IAuthProps> = ({ clickHandler }) => {
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
        <FormTitle> Forgot Password </FormTitle>
      </FormInfos>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
          <Input name="email" placeholder="Password" type="password" required />

          <TouchableOpacity>
            <ButtonLogin> Send Link <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>

      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <ButtonSignUp> <AntDesign name="arrowleft" size={30} color="#707070" /> Back </ButtonSignUp>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <ButtonSignUp> Sign Up <AntDesign name="arrowright" size={30} color="#707070" /> </ButtonSignUp>
      </TouchableOpacity>
    </Container>
  )
}


export default ForgotPassForm;