import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import api from '../../services/api';


import ListOneGame from '../ListOneGame';

import { Container } from './styles';
 
interface IListGamesProps {
  filter: any | undefined;
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

const ListAllGames: React.FC<IListGamesProps> = ({ filter }) => {
  const [filterGames, setFilterGames] = useState([]);
  const [allGames, setAllGames] = useState([]);

  const loadAllGames = async () => {
    try{
      const response = await api.get('/games/bets/all', {
      })
      setAllGames(response.data);
      setFilterGames(response.data);
      return;
    } catch(err){
    alert('erro na api!')
    }
  }

  const handleFilterGames = () => {
    if(!filter) {
      return setFilterGames(allGames);
    }
    const aux = allGames.filter(game => game.game_id === filter.id);
    setFilterGames(aux);
    return;
  }

  useEffect(() => {
    loadAllGames()
  },[])

  useEffect(() => {
    handleFilterGames();
  }, [filter])

  return (
    <Container>
      {allGames.length > 0 
        ? filterGames.map((item:any) => (
        <ListOneGame key={item.id} game={item}/>
       ))
       : 
       <Text>Não existe jogos desse tipo!!</Text>}
    </Container>
  );
};

export default ListAllGames;