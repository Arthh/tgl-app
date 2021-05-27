import React from 'react';

import { EvilIcons } from '@expo/vector-icons';
import dateFormater from '../../utils/dateFormater';

import {  Container, InfoGameArea,Numbers,
          GameType, GamePrice, OptionsGame } from './styles';
          
import { useDispatch } from 'react-redux';
import { removeProductToCart } from '../../store/modules/cart/action';
import { TouchableOpacity } from 'react-native';
import formatCurrency from '../../utils/formatCurrency';


const CartItem: React.FC<any> =({ item }) => {
  const dispatch = useDispatch();
  

  const formatOneNumber = (number: number) => { 
    var formated = number < 10 ? `0${number}` : number;
    return formated;
  }

  const formateNumbers = (numbers: number[]) => {
    const copy = numbers;
    const aux = copy.map(numero => formatOneNumber(numero));
    const numerosOrdenados = aux.sort( (a,b) => Number(a) - Number(b));
    return numerosOrdenados.join(', ');
  }; 

  return (
    <Container color={item.color}>
      <InfoGameArea >
        <Numbers>{formateNumbers(item.numbers)}</Numbers>

        <OptionsGame>
          <GamePrice> {dateFormater(item.day)} - {formatCurrency(item.price)}  </GamePrice>  

          <TouchableOpacity
            onPress={() => dispatch(removeProductToCart(item))} >
            <EvilIcons 
              name="trash" 
              size={20}
              color="#707070"
            />
          </TouchableOpacity>
        </OptionsGame>

        <GameType color={item.color}>{item.type}
        </GameType>
      </InfoGameArea> 
    </Container>
  );
};
  
export default CartItem;