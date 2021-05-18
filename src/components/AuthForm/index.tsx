import React, { useRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';

import Input from '../../UI/Input';

import {  Container, LogoTgl, FormTitle,
          FormBody, BorderBottom, FormInfos,
          ForgotText, ButtonLogin } from './styles';

interface IAuthProps {
  clickHandler: (event: any) => (any);
}

interface FormData {
  name: string
  email: string
}

const AuthForm: React.FC<IAuthProps> = ({ clickHandler }) => {
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
          <ForgotText> 
            <Text> I forget my password! </Text>
          </ForgotText>

          <TouchableOpacity>
            <ButtonLogin> Log In </ButtonLogin> 
          </TouchableOpacity>
        </FormBody>

    </Form>
    </Container>
  )
}


export default AuthForm;