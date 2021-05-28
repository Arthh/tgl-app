import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import formatCurrency from '../../utils/formatCurrency';

import CartItem from '../CartItem';

import { Container, TitleCart, CartView, TotalView, TotalCartText, SubtitleTotal, PriceText,
          FinalButton, TextFinalButton, BackGround} from './styles';
import { useSelector } from 'react-redux';
import { Item } from '../../store/modules/cart/types';
import { IState } from '../../store';


interface ICartProps {
  closeCart: () => any;
  saveGame: () => any;
}

const Cart: React.FC<ICartProps> = ({ closeCart, saveGame }) => {

  const gamesInCart = useSelector<IState, Item[]>(state => state.itemCart.items );
  const cartPrice = useSelector<IState>(state => state.itemCart.price );

  return (
    <BackGround>
      <View style={{ width: '38%', height: '100%', opacity: 0.5, backgroundColor: '#FFF' }} >
        <Text onPress={closeCart} style={{ width: '100%', height: '100%' }}  ></Text>  
      </View>
    <Container>
    <View style={{ backgroundColor: '#fff', width: 265 }}>
      <Text onPress={closeCart} style={{ color: '#B5C401', textAlign: 'right', paddingRight: 18, fontSize: 30, fontWeight: 'bold' }}>x</Text>
    </View>
    <TitleCart><Ionicons name="cart-outline" size={35} color="#B5C401" /> CART</TitleCart>
    <CartView>
      {gamesInCart.length > 0 ?  gamesInCart.map(item => (
        <CartItem
          key={item.day}
          item={item}
          />
      )) : 
        <Text 
          style={{ marginTop: 30, marginLeft: 10, fontSize: 20, fontWeight: 'bold' , color: '#B5C401'}}
        > Carrinho vazio! 
        </Text> 
      }

      </CartView>
      <TotalView>
        <TotalCartText>CART</TotalCartText>
        <SubtitleTotal>TOTAL</SubtitleTotal>
        <PriceText> {formatCurrency(Number(cartPrice))} </PriceText>
      </TotalView>
  
      <FinalButton onPress={() => saveGame()}>
        <TextFinalButton>Save <AntDesign name="arrowright" size={24} color="#B5C401" /></TextFinalButton>
      </FinalButton>
    </Container>
    </BackGround>
  )
}

export default Cart;