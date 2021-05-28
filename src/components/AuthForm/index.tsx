import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/AuthContext';
import { TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import Input from '../../UI/Input';

import {  Container, LogoTgl, FormTitle,
          FormBody, BorderBottom, FormInfos,
          ForgotText, ButtonLogin, ButtonSignUp } from './styles';

interface FormData {
  email: string
  password: string
}

const AuthForm: React.FC = ( ) => {
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const showPasswordHandler = () => {
    return setShowPassword(!showPassword);
  }

  const handleSubmit = useCallback( async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
          email: Yup.string().email('Digite um email valido').required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
          abortEarly: false,
      });
      setLoading(true);
      await signIn({
          email: data.email,
          password: data.password,
      });
      
  } catch (err) {
    setLoading(true);
    if(err instanceof Yup.ValidationError){
      const errorMessages = {};
      err.inner.forEach(error => {
        errorMessages[error.path] = error.message;
      })
      formRef.current.setErrors(errorMessages)
    }
    setLoading(false);
    
  }}, [signIn, loading]);
  
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
          secureTextEntry={showPassword}
          selectionColor={'#B5C401'}
          />

        <TouchableOpacity
          onPress={() => showPasswordHandler()}
          style={{ position: 'absolute', bottom: 180, right: 50, }}>
          {showPassword ? <FontAwesome name="eye" size={24} color="#9D9D9D" /> : <FontAwesome name="eye-slash" size={24} color="#9D9D9D" />}
        </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('forgotPass')} > 
            <ForgotText > I forget my password! </ForgotText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => formRef.current?.submitForm()} >
            <ButtonLogin> Log In  <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>

      <TouchableOpacity onPress={() => navigation.navigate('signUp')} >
        <ButtonSignUp> Sign Up <AntDesign name="arrowright" size={30} color="#707070" /> </ButtonSignUp>
      </TouchableOpacity>
    </Container>
  )
}


export default AuthForm;