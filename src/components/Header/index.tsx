import React from 'react';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Title, BorderBottom, LogoArea, HeaderOptions} from './styles';
import { useAuth } from '../../hooks/AuthContext';


const Header: React.FC = () => {
  const route = useRoute();
  const { signOut } = useAuth();
  const routeName = route.name === '$'
  const navigation = useNavigation()


  const handleLogout = async () => {
    await signOut()
  }


  return (
    <Container>
      <LogoArea>
      <Title> TGL </Title>
      <BorderBottom />
      </LogoArea>
      {/* <HeaderOptions> */}
      {/* {routeName &&  <AntDesign name="shoppingcart" size={35} color="#B5C401" />} */}
      <MaterialIcons name="logout" size={35} color="#C1C1C1" onPress={handleLogout} style={{ marginTop: 30 }} />
      {/* </HeaderOptions> */}
    </Container>
  );
}

export default Header;