import React from 'react';
import { Container } from './styles';

const Input : React.FC<any> = ({...rest}) => (
  <Container {...rest} />
)

export default Input;