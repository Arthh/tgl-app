import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/AuthContext';
import { TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import Input from '../../UI/Input';

import {  Container, LogoTgl, FormTitle,
          FormBody, BorderBottom, FormInfos,
          ForgotText, ButtonLogin, ButtonSignUp } from './styles';

interface FormData {
  email: string
  password: string
}

const AuthForm: React.FC<any> = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
          email: Yup.string().email('Digite um email valido').required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate(data, {
          abortEarly: false,
      });
      await signIn({
          email: data.email,
          password: data.password,
      });

  } catch (err) {
    alert('Credenciais incorretas!');
  }};
  
  return (
    <Container>
      <FormInfos>
        <LogoTgl> TGL </LogoTgl>
        <BorderBottom />
        <FormTitle> Authentication </FormTitle>
      </FormInfos>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
        <Input
          name="email"
          placeholderTextColor="#9D9D9D"
          selectionColor={'#B5C401'}
        />

        <Input
          name="password"
          placeholderTextColor="#9D9D9D"
          selectionColor={'#B5C401'}
          />

          <TouchableOpacity onPress={() => navigation.navigate('forgotpass')} > 
            <ForgotText > I forget my password! </ForgotText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => formRef.current?.submitForm()} >
            <ButtonLogin> Log In  <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>

      <TouchableOpacity onPress={() => navigation.navigate('signup')} >
        <ButtonSignUp> Sign Up <AntDesign name="arrowright" size={30} color="#707070" /> </ButtonSignUp>
      </TouchableOpacity>
    </Container>
  )
}


export default AuthForm;