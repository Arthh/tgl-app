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
import ListAllGames from '../../components/ListAllGames';
import { select } from '@redux-saga/core/effects';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const games = useSelector<IState, GamesProps[]>(state => state.games.games);
  const [selectedGame, setSelectedGame] = useState<number[] >([]);

  useEffect(() => {
    dispatch(loadGames());

  }, [dispatch])
  
  const changeGameHandler = (gameClicked: any) => {
    const auxGame = gameClicked;

    if(selectedGame.includes(auxGame)) {
      const indexOfNumber = selectedGame.findIndex(auxGame);
      selectedGame.splice(indexOfNumber, 1);
      setSelectedGame(selectedGame)
      return;
    }else {
      return setSelectedGame([ ...selectedGame, auxGame]);
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
            isActive={selectedGame.indexOf(game.id) !== -1 ? true : false}
            onPress={() => changeGameHandler(game.id)}
          > 
          {game.type}
          </ButtonGames> 
        ))}
        </FilterButtonArea>
      </Container>

      <ListGamesArea>
        <ListAllGames filter={selectedGame} />
      </ListGamesArea>
    </>
  );
}

export default Home;