import { all } from '@redux-saga/core/effects';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import api from '../../services/api';


import ListOneGame from '../ListOneGame';

import { Container } from './styles';
 
interface IListGamesProps {
  filter: any[] | undefined;
  allGames: any[] | undefined;
}

interface IGameProps {
  game: {
    day: string,
    price: any,
    numbers: any[],
    game: {
      color: string,
      type: string,
    }
  }
}

const ListAllGames: React.FC<IListGamesProps> = ({ allGames, filter }) => {
  const [filterGames, setFilterGames] = useState([]);

  const handleFilterGames = () => {
    if(filter.length ===  0 ) {
      setFilterGames([...allGames]);
      return
    } else {

    const aux = allGames.filter(game => filter.includes(game.game_id));
    setFilterGames([...aux]);
    return;
    }
  }
  
  useEffect(() => {
    handleFilterGames();
  }, [allGames, filter])

  return (
    <Container>
      {filterGames ?
        filterGames.map((item:any) => (
        <ListOneGame key={item.id} game={item}/>
       )) 
       : 
       <Text>Não existe jogos desse tipo!!</Text>}
    </Container>
  );
};

export default ListAllGames;