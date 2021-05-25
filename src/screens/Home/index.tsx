import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import ButtonGames from '../../components/GameButton';
import ListOneGame from '../../components/ListOneGame';
import Header from '../../components/Header';

import { Container, Title, FilterText, FilterButtonArea,
          ListGamesArea } from './styles'; 

export interface IGameProps {
  id?: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
  min_cart_value: number;
}

const Home: React.FC = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState<IGameProps | undefined>();

  const loadAllGames = async() =>{
    try {
      const response = await api.get('/games');
  
      if(!response){
        throw new Error('Erro ao recuperar data.');
      }

      setGames(response.data);
    }catch (err){
      alert('Erro ao enviar requisição, tente novamente mais tarde!');
      return
    }
  }

  useEffect(() => {
    loadAllGames();
  }, [])
  
  const changeGameHandler = (gameClicked: any) => {

    const auxGame:IGameProps|undefined = games.find((game:IGameProps) => game.type === gameClicked.type);

    if(selectedGame?.type === auxGame!.type) {
      return setSelectedGame(undefined);
    }else {
      return setSelectedGame(auxGame);
    }
  };

  return (
    <>
      <Header/>
      <Container>
        <Title> recent games </Title>
        <FilterText> filters </FilterText>
        <FilterButtonArea> 
        {games.map((game:IGameProps) => (
          <ButtonGames 
            key={game.type}
            color={game.color}
            title={game.type}
            isActive={selectedGame?.type === game.type}
            onPress={() => changeGameHandler(game)}
          > 
          {game.type}
          </ButtonGames> 
        ))}
        </FilterButtonArea>
      </Container>

      <ListGamesArea>
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
      </ListGamesArea>
    </>
  );
}

export default Home;