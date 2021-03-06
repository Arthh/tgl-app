import React, { ButtonHTMLAttributes } from 'react';
import { ButtonProps } from 'react-native';

import { Container, CustomText, RemoveX } from './styles';


type INumberProps = ButtonProps & {
  isActive: boolean;
  color: string;
  value: string;
  size?: string
}

const Number: React.FC<INumberProps> = ({children,color,size, isActive, ...rest}) => {

  return (
    <Container size={size} isActive={isActive} color={color} {...rest} >
      {isActive && isActive ? <RemoveX> X </RemoveX> : null }
      <CustomText isActive={isActive} color={color} > {children} </CustomText>
    </Container>
    );
};

export default Number;
