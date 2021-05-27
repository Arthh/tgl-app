import React from 'react';

import formatCurrency from '../../utils/formatCurrency';
import dateFormater from '../../utils/dateFormater';

import { Container, InfoGameArea, GameType, GameNumbers, GameInfos, GamePrice } from './styles';

interface IGameProps {
  game: {
    day: string,
    price: any,
    numbers: string,
    game: {
      color: string,
      type: string,
    }
  }
}

const ListOneGame: React.FC<IGameProps> = ({ game }) => {

  const formatOneNumber = (number: number) => { 
    var formated = number < 10 ? `0${number}` : number;
    return formated;
  }
  
  const formateNumbers = (numbers: string) => {
    const myArray = game.numbers.split(',');
    const numerosOrdenados = myArray.sort( (a,b) => Number(a) - Number(b));
    const aux = numerosOrdenados.map(numero => formatOneNumber(Number(numero)));
    return aux.join(', ');
  }; 
  


  return (
    <Container color={game.game.color}>
      <InfoGameArea >
        <GameNumbers>{formateNumbers(game.numbers)}</GameNumbers>
        <GameInfos>
          {dateFormater(new Date(game.day))} - 
          <GamePrice>{formatCurrency(game.price)}</GamePrice>
        </GameInfos>
        <GameType color={game.game.color} >{game.game.type}</GameType>
      </InfoGameArea>
    </Container>
  );
}

export default ListOneGame;