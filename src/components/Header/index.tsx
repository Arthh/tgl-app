import React from 'react';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import { Container, Title, BorderBottom, LogoArea, HeaderOptions} from './styles';


const Header: React.FC = () => {
  const route = useRoute();
  const routeName = route.name === 'NewBet'
  return (
    <Container>
      <LogoArea>
      <Title> TGL </Title>
      <BorderBottom />
      </LogoArea>
      <HeaderOptions>
      {routeName &&  <AntDesign name="shoppingcart" size={35} color="#B5C401" />}
      <MaterialIcons name="logout" size={35} color="#C1C1C1" />
      </HeaderOptions>
    </Container>
  );
}

export default Header;