import React  from 'react';
import { ButtonProps } from 'react-native';
import { Container, CustomText, RemoveX } from './styles'

type IGameButton = ButtonProps & {
  color: string;
  isActive: boolean;
  key?: string;
}

const ButtonGames: React.FC<IGameButton> = ({children, color, isActive , ...rest}) => (
  
  <Container isActive={isActive} color={color} {...rest}>
    {isActive && isActive ? <RemoveX> X </RemoveX> : null }
    <CustomText isActive={isActive} color={color} > {children} </CustomText>
  </Container>
    );

export default ButtonGames;