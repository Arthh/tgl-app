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
  name: string
  email: string
}

const AuthForm: React.FC<IAuthProps> = ({ clickHandler }) => {
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
        <FormTitle> Authentication </FormTitle>
      </FormInfos>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
          <Input name="name" placeholder="Email" type="email" required />
          <Input name="email" placeholder="Password" type="password" required />

          <TouchableOpacity onPress={() => navigation.navigate('forgotpass')} > 
            <ForgotText > I forget my password! </ForgotText>
          </TouchableOpacity>

          <TouchableOpacity>
            <ButtonLogin> Log In  <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>

      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <ButtonSignUp> Sign Up <AntDesign name="arrowright" size={30} color="#707070" /> </ButtonSignUp>
      </TouchableOpacity>
    </Container>
  )
}


export default AuthForm;