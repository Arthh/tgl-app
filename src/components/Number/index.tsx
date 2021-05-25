import React, { ButtonHTMLAttributes } from 'react';
import { ButtonProps } from 'react-native';

import { Container, CustomText } from './styles';


type INumberProps = ButtonProps & {
  isActive: boolean;
  color: string;
}

const Number: React.FC<INumberProps> = ({children,color,isActive, ...rest}) => {

  return (
    <Container isActive={isActive} color={color} {...rest} >
      <CustomText isActive={isActive} color={color} > {children} </CustomText>
    </Container>
    );
};

export default Number;
