import React from 'react';

import { EvilIcons } from '@expo/vector-icons';

import {  Container, InfoGameArea,Numbers,
          GameType, GamePrice } from './styles';


const CartItem: React.FC<any> = ({game, removeHandler}) => {

  const formatOneNumber = (number: number) => { 
    var formated = number < 10 ? `0${number}` : number;
    return formated;
  }

  const formateNumbers = (numbers: number[]) => {
    numbers = numbers.sort((a,b) => a - b);
    const aux = numbers.map(number => formatOneNumber(number));
    return aux.join(', ');
  }; 

  return (
    <Container color={game.color}>
      <InfoGameArea >
      <EvilIcons name="trash" size={20} color="#707070" style={{ position: 'absolute', right: 20, bottom: 29 }} />
        <Numbers>{formateNumbers(game.numbers)}</Numbers>
          <GamePrice> 01/01/2021 - R$(10.99)  </GamePrice>
          
        <GameType color={game.color }>{game.type}
        </GameType>
      </InfoGameArea>
    </Container>
  );
};
  
export default CartItem;