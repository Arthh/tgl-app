import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import api from '../../services/api';
import ButtonGames from '../../components/GameButton';
import Header from '../../components/Header';

import { Container, Title, FilterText, GameTypeArea,
          ListGamesArea, SubArea } from './styles'; 
import BetInfoFill from '../../components/BetInfoFill';
import CreateNumbers from '../../components/CreateNumbers';

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
  const [gameList, setGameList] = useState<any[]>([ ]);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState<IGameProps>( );
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([ ]);

  const loadAllGames = async() =>{
    try {
      const response = await api.get('/games');

      if(!response){
        throw new Error('Erro ao recuperar data.');
      }

      setSelectedGame(response.data[0]);
      setGames(response.data);
    }catch (err){   
      alert('Erro na API!')
    }
  }
  
    useEffect(() => {
      loadAllGames();
    },[]);



   // verificando qual jogo está selecionado
   const changeGameHandler = useCallback((gameClicked) => {
    const auxGame = games.find((game:IGameProps) => game.type === gameClicked.type)
    setSelectedGame(auxGame);
    return clearGameHandler();
  }, [games]);

  // função que add novo número
  const addNumberHandler = useCallback((number: string) => {
    // verificando se já tem o maximo de elementos possíveis
    if(selectedNumbers.length + 1> selectedGame!['max_number']) {
      return alert('Número máximo adicionado!');
    }
    // valor do botão clicado
    const newNumber = Number(number);

    // verificando se já existe no array o elemento
    if(selectedNumbers.find(num => num === newNumber)){
      const aux = selectedNumbers.filter(num => num !== newNumber);
      return setSelectedNumbers(aux);
    }

    // add no array o número, após as validações
    return setSelectedNumbers([...selectedNumbers, newNumber]);
  },[selectedGame, selectedNumbers]);

// função que limpa os números
const clearGameHandler = () => {
  return setSelectedNumbers([]);
};

  return (
      selectedGame ? (
      <>
        <Header/>
        <Container>
          <Title> NEW GAME FOR {selectedGame?.type} </Title>
          <FilterText> choose a game </FilterText>
          <GameTypeArea> 
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
          </GameTypeArea>
          <SubArea>
           <BetInfoFill text={selectedGame.description} />
          </SubArea>
        </Container>

        <ListGamesArea>
        {selectedGame &&  
            <CreateNumbers
              clickHandler={addNumberHandler}
              color={selectedGame.color}
              numbers={selectedNumbers} 
              quantity={selectedGame.range | 0} 
        />}
        </ListGamesArea>
      </>
    ) 
    : 
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={100}   color="#B5C401"/>
    </View>
  );  
}

export default Home;