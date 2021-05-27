import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import formatCurrency from '../../utils/formatCurrency';

import CartItem from '../CartItem';

import { Container, TitleCart, CartView, TotalView, TotalCartText, SubtitleTotal, PriceText,
          FinalButton, TextFinalButton, BackGround} from './styles';


interface ICartProps {
  closeCart: () => any;
  gameList: any[]
}

const Cart: React.FC<ICartProps> = ({ closeCart, gameList }) => {
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
      {gameList.map(item => (
        <CartItem
          key={item.numbers}
          game={item}
          />
      ))}
      </CartView>

      <TotalView>
        <TotalCartText>CART</TotalCartText>
        <SubtitleTotal>TOTAL</SubtitleTotal>
        <PriceText>10,99</PriceText>
      </TotalView>
    
      <FinalButton onPress={() => (console.log('oi'))}>
        <TextFinalButton>Save <AntDesign name="arrowright" size={24} color="#B5C401" /></TextFinalButton>
      </FinalButton>
    </Container>
    </BackGround>
  )
}

export default Cart;