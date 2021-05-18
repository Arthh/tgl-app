import React, { useRef } from 'react';
import { View, Button } from 'react-native';

import Input from '../../UI/Input';

import { FormTitle, NewForm } from './styles';

interface IAuthProps {
  clickHandler: (event: any) => (any);
}

const AuthForm: React.FC<IAuthProps> = ({ clickHandler }) => {
  const formRef = useRef(null);

  function handleSubmit(data: any) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }
  
  return (
    <View>
      <FormTitle> Authentication </FormTitle>
      <NewForm ref={formRef} onSubmit={handleSubmit}>
        <Input placeholder="Email" />

        <Button title="Sign in" onPress={() => formRef.current.submitForm()} />
      </NewForm>
    </View>
  )
}


export default AuthForm;