import React from 'react';
import { Text } from 'react-native';

import ButtonGames from '../../components/GameButton';
import Header from '../../components/Header';

import { Container, Title, FilterText, GameTypeArea,
          ListGamesArea } from './styles'; 

const Home: React.FC = () => {
  const changeGameHandler = () => {
    alert('oi')
  }

  return (
    <>
      <Header/>
      <Container>
        <Title> NEW GAME FOR LOTOFACIL </Title>
        <FilterText> choose a game </FilterText>
        <GameTypeArea> 
          <ButtonGames 
            color='black'
            title="oi"
            isActive={false}
            onPress={() => changeGameHandler()}
          > 
          LotoFacil
          </ButtonGames> 
          <ButtonGames 
            color='red'
            title="oi2"
            isActive={false}
            onPress={() => changeGameHandler()}
          > 
          Quina
          </ButtonGames> 
          <ButtonGames 
            color='green'
            title="oi3"
            isActive={false}
            onPress={() => changeGameHandler()}
          > 
          LotoTodos
          </ButtonGames> 
        </GameTypeArea>
        
      </Container>

      <ListGamesArea>
      
      </ListGamesArea>
    </>
  );
}

export default Home;