import React, { useCallback, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import Input from '../../UI/Input';

import {  Container, LogoTgl, FormTitle,
          FormBody, BorderBottom, FormInfos,
          ForgotText, ButtonLogin, ButtonSignUp } from './styles';
import { useAuth } from '../../hooks/AuthContext';

interface IAuthProps {
  user: any
}

interface FormData {
  name: string,
  email: string,
  password: string,
}

const AccountForm: React.FC<IAuthProps> = ({ user }) => {
  const navigation = useNavigation();
  const { updateUser } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback( async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
          name: Yup.string(),
          email: Yup.string().email('Digite um email valido'),
          password: Yup.string().required('Senha é obrigatoria!'),
      });

      await schema.validate(data, {
          abortEarly: false,
      });

      const updatedName = data.name ? data.name : user.name
      const updatedEmail = data.email ? data.email : user.email

      await updateUser(({
          name: updatedName,
          email: updatedEmail,
          password: data.password,
      }));
    alert('Atualizado com sucesso!');
  } catch (err) {
    if(err instanceof Yup.ValidationError){
      const errorMessages = {};
      err.inner.forEach(error => {
        errorMessages[error.path] = error.message;
      })
      formRef.current.setErrors(errorMessages)
    }else {
      alert('Erro ao atualizar dados! tente novamente mais tarde!');
    }
    
  }}, []);
  
  return (
    <Container>
      <FormInfos>
        <FormTitle> Account Info </FormTitle>
      </FormInfos>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
          <Input name="name"  />
          <Input name="email" />
          <Input name="password"  />
          <TouchableOpacity onPress={() => formRef.current?.submitForm()}  >
            <ButtonLogin> Save <AntDesign name="arrowright" size={30} color="#B5C401" /> </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>
      </Form>
    </Container>
  )
}


export default AccountForm;