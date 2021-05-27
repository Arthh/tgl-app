import React, { useState, useEffect } from 'react';

import ButtonGames from '../../components/GameButton';
import ListOneGame from '../../components/ListOneGame';
import Header from '../../components/Header';

import { Container, Title, FilterText, FilterButtonArea,
          ListGamesArea } from './styles'; 

import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../../store/modules/games/actions';
import { IState } from '../../store';
import { GamesProps } from '../../store/modules/games/types';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const games = useSelector<IState, GamesProps[]>(state => state.games.games);

  const [selectedGame, setSelectedGame] = useState<GamesProps | undefined>();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch])
  
  const changeGameHandler = (gameClicked: any) => {

    const auxGame:GamesProps|undefined = games.find((game:GamesProps) => game.type === gameClicked.type);

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
        {games.map((game:GamesProps) => (
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