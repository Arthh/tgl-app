import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import api from '../../services/api';
import Input from '../../UI/Input';

import {  Container, LogoTgl, FormTitle,
          FormBody, BorderBottom, FormInfos,
          ButtonLogin, ButtonSignUp } from './styles';
import { useNavigation } from '@react-navigation/native';

interface FormData {
  name: string,
  email: string,
  password: string
}

const SignUpForm: React.FC<any> = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [showPassword, setShowPassword] = useState(true);

  const showPasswordHandler = () => {
    return setShowPassword(!showPassword);
  }

  const handleSubmit = async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Digite um email valido').required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate(data, {
          abortEarly: false,
      });
      await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password
      });
      alert('Registrado com sucesso!');
      navigation.navigate('signIn');
    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const errorMessages = {};
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })
        formRef.current.setErrors(errorMessages)
      }
    }
  };
  
  return (
    <Container>
      <FormInfos>
        <LogoTgl> TGL </LogoTgl>
        <BorderBottom />
        <FormTitle> Registration </FormTitle>
      </FormInfos>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
          <Input
            name="name"
            placeholderTextColor="#9D9D9D"
            selectionColor={'#B5C401'}
          />
          <Input
            name="email"
            placeholderTextColor="#9D9D9D"
            selectionColor={'#B5C401'}
          />
          <Input
            name="password"
            placeholderTextColor="#9D9D9D"
            selectionColor={'#B5C401'}
            secureTextEntry={showPassword}
          />

        <TouchableOpacity
          onPress={() => showPasswordHandler()}
          style={{ position: 'absolute', bottom: 120, right: 40, }}>
          {showPassword ? <FontAwesome name="eye" size={24} color="#9D9D9D" /> : <FontAwesome name="eye-slash" size={24} color="#9D9D9D" />}
        </TouchableOpacity>

          <TouchableOpacity onPress={() => formRef.current?.submitForm()}  >
            <ButtonLogin> Register <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>

      <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
        <ButtonSignUp> <AntDesign name="arrowleft" size={30} color="#707070" /> Back </ButtonSignUp>
      </TouchableOpacity>
    </Container>
  )
}


export default SignUpForm;