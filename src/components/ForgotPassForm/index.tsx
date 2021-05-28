import React, { useCallback, useRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';
import { AntDesign } from '@expo/vector-icons';

import Input from '../../UI/Input';

import {  Container, LogoTgl, FormTitle,
          FormBody, BorderBottom, FormInfos,
          ButtonLogin, ButtonSignUp } from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

interface IAuthProps {
  clickHandler: (event: any) => (any);
}

interface FormData {
  email: string
}

const ForgotPassForm: React.FC<IAuthProps> = ({ clickHandler }) => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback( async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
          email: Yup.string().email('Digite um email valido').required('Email é obrigatorio!'),
      });

      await schema.validate(data, {
          abortEarly: false,
      });

      await api.post('/passwords', {email: data.email})
      alert('Email enviado com suceso!')
      navigation.navigate('signIn');
      return;

  } catch (err) {
    if(err instanceof Yup.ValidationError){
      const errorMessages = {};
      err.inner.forEach(error => {
        errorMessages[error.path] = error.message;
      })
      formRef.current.setErrors(errorMessages)
    }else{
      alert('Email Invalido!')
    }
    
  }},[]);
  
  return (
    <Container>
      <FormInfos>
        <LogoTgl> TGL </LogoTgl>
        <BorderBottom />
        <FormTitle> Forgot Password </FormTitle>
      </FormInfos>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
          <Input name="email" />

          <TouchableOpacity onPress={() => formRef.current?.submitForm()} >
            <ButtonLogin> Send Link <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>

      <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
        <ButtonSignUp> <AntDesign name="arrowleft" size={30} color="#707070" /> Back </ButtonSignUp>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <ButtonSignUp> Sign Up <AntDesign name="arrowright" size={30} color="#707070" /> </ButtonSignUp>
      </TouchableOpacity>
    </Container>
  )
}


export default ForgotPassForm;