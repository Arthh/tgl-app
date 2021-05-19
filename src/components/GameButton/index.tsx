import React  from 'react';
import { ButtonProps } from 'react-native';
import { Container, CustomText } from './styles'

type IGameButton = ButtonProps & {
  color: string;
  isActive: boolean;
}

const ButtonGames: React.FC<IGameButton> =
 ({children, color, isActive,...rest}) => (

  <Container  isActive={isActive} color={color} {...rest}>
    <CustomText isActive={isActive} color={color} > {children} </CustomText>
  </Container>
    );

export default ButtonGames;