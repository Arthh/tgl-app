import React from 'react';
import { Text } from 'recharts';
import ButtonGames from '../../components/GameButton';

import { Container, Title, FilterText, FilterButtonArea } from './styles'; 

const Home: React.FC = () => {

  const changeGameHandler = () => {
    alert('oi')
  }

  return (
    <>
      <Container>
        <Title> recent games </Title>
        <FilterText> filters </FilterText>
        <FilterButtonArea > 
          <ButtonGames 
            color='black'
            title="oi"
            isActive={false}
            onPress={() => changeGameHandler()}
          > 
          Oi
          </ButtonGames> 
        </FilterButtonArea>
      </Container>
    </>
  );
}

export default Home;