import React from 'react';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Title, BorderBottom, LogoArea, HeaderOptions} from './styles';
import { useAuth } from '../../hooks/AuthContext';


const Header: React.FC = () => {
  const route = useRoute();
  const { signOut } = useAuth();
  const routeName = route.name === 'NewBet'

  return (
    <Container>
      <LogoArea>
      <Title> TGL </Title>
      <BorderBottom />
      </LogoArea>
      <HeaderOptions>
      {routeName &&  <AntDesign name="shoppingcart" size={35} color="#B5C401" />}
      <MaterialIcons name="logout" size={35} color="#C1C1C1" onPress={() => signOut()} />
      </HeaderOptions>
    </Container>
  );
}

export default Header;