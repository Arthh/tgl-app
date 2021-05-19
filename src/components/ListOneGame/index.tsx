import React from 'react';

import formatCurrency from '../../utils/formatCurrency';
import dateFormater from '../../utils/dateFormater';

import { Container, InfoGameArea, GameType, GameNumbers, GameInfos, GamePrice } from './styles';

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

const ListOneGame: React.FC<IGameProps> = ({ game }) => {
  return (
    <Container color={game.game.color}>
      <InfoGameArea >
        <GameNumbers>{game.numbers}</GameNumbers>
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