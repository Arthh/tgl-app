import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api';
import ButtonGames from '../../components/GameButton';
import Header from '../../components/Header';
import SelectedNumbersAndButtons from '../../components/SelectedNumbersAndButtons';

import { Container, Title, FilterText, GameTypeArea,
          ListGamesArea, SubArea, CartButton } from './styles'; 

import BetInfoFill from '../../components/BetInfoFill';
import CreateNumbers from '../../components/CreateNumbers';
import Cart from '../../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { GamesProps } from '../../store/modules/games/types';
import { loadGames } from '../../store/modules/games/actions';
import { addGamesRequest, addProductToCartRequest } from '../../store/modules/cart/action';
import { Item } from '../../store/modules/cart/types';
import { useNavigation } from '@react-navigation/core';


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const games = useSelector<IState, GamesProps[]>(state => state.games.games);
  const gamesInCart = useSelector<IState, Item[]>(state => state.itemCart.items );
  const [gameList, setGameList] = useState<any[]>([ ]);

  const [selectedGame, setSelectedGame] = useState<GamesProps>( );
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([ ]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => { 
    dispatch(loadGames());
    setSelectedGame(games[0]);
  }, [dispatch])

    const handleCart = () => {   
      return setShowCart(!showCart)
    }

   // função que verifica qual jogo está selecionado
   const changeGameHandler = useCallback((gameClicked) => {
    const auxGame = games.find((game:GamesProps) => game.type === gameClicked.type)
    setSelectedGame(auxGame);
    return clearGameHandler();
  }, [games]);

  // função que remove um numero selecionado
  const removeSelectedNumber = (number: number) => {
    const aux = selectedNumbers.filter(num => num !== number);
      return setSelectedNumbers(aux);
  }

  // função que add novo número
  const addNumberHandler = useCallback((number: any) => {

    // valor do botão clicado
    const newNumber = Number(number);

    // verificando se já existe no array o elemento
    if(selectedNumbers.find(num => num === newNumber)){
      return removeSelectedNumber(newNumber);
    }

     // verificando se já tem o maximo de elementos possíveis
     if(selectedNumbers.length + 1> selectedGame!['max_number']) {
      return alert('Número máximo adicionado!');
    }

    // add no array o número, após as validações
    return setSelectedNumbers([...selectedNumbers, newNumber]);
  },[selectedGame, selectedNumbers]);

// função que limpa os números
const clearGameHandler = () => {
  return setSelectedNumbers([]);
};

  // função que formata um número
  const formatNumberOfButtons = (number:number) =>{
    var formated = number < 10 ? `0${number}` : number;
    return formated;
  }

  // função que gera números aleatorios.
  const generateRandomNumbers = (numberMax:number) => {
    return Number(formatNumberOfButtons(Math.ceil(Math.random() * numberMax)));
  }

  // função que completa os números
  const completeGameHandler = useCallback(() => {
    var range =  selectedGame!.range;
    var qntNumbersForComplete = selectedGame!['max_number'] - selectedNumbers.length;
    var allNumbers = [];
    while (allNumbers.length < qntNumbersForComplete) {
      var randomNumber = generateRandomNumbers(range);
      if(allNumbers.indexOf(randomNumber) === -1 && selectedNumbers.indexOf(randomNumber) === -1 ){
        allNumbers.push(randomNumber);
      }
    }
    return setSelectedNumbers([...selectedNumbers, ...allNumbers]);
  },[generateRandomNumbers, selectedGame, selectedNumbers]);

  // função que add game no carrinho
  const addGameToCartHandler = useCallback(() => {
    if(selectedNumbers.length < selectedGame!.max_number){
      return alert(`São necessarios ${selectedGame!.max_number} números!`)
    }

    const newGame = {
      id: Number(new Date().getTime()),
      type: selectedGame?.type,
      game_id: selectedGame?.id,
      numbers: selectedNumbers,
      price: selectedGame?.price,
      day: new Date(),
      color: selectedGame?.color
    }

    dispatch(addProductToCartRequest(newGame))
    setGameList([...gameList, newGame]);
    return clearGameHandler();
  },[selectedGame?.price, selectedGame?.type, selectedNumbers]);
  
  const saveGame = async () => {
    let price = 0;
    gameList.forEach(game => price += game.price);

    if(price < 30){
      return alert('Preço do carrinho inferior a 30$')
    }

    const cart:any = [];

    gameList.forEach(game => {
      cart.push({
        numbers: game.numbers.toString(),
        price: game.price,
        day: game.day,
        game_id: game.game_id
      })
    })
    
    try {
      const response = await api.post('/games/bets', {
      cart,
      totalPrice: price
      })

      if(response.data) {
        dispatch(addGamesRequest(gamesInCart));
        navigation.navigate('Home');
        clearGameHandler();
        setGameList([]);
        return alert('Bet realizada com sucesso!')
      }
    }catch(err){
      return alert('Erro ao enviar requisição, tente novamente mais tarde!');
    }
  };


  return (
      selectedGame ? (
      <>
        <Header/>
         <CartButton onPress={() => handleCart()} >
          <AntDesign name="shoppingcart" size={35} color="#B5C401" />
        </CartButton>

        {showCart && (<Cart saveGame={saveGame} closeCart={handleCart} />)}
        <Container>
          <Title> NEW GAME FOR {selectedGame?.type} </Title>
          <FilterText> choose a game </FilterText>
          <GameTypeArea> 
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
          </GameTypeArea>

          <SubArea>
            { selectedNumbers.length > 0 ?
              <SelectedNumbersAndButtons 
                color={selectedGame.color} 
                selectedNumbers={selectedNumbers} 
                removeHandler={removeSelectedNumber}
                completeGameHandler={completeGameHandler}
                clearGameHandler={clearGameHandler}
                addGameHandler={addGameToCartHandler}
              /> 
              :
             <BetInfoFill text={selectedGame.description} />
            }
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