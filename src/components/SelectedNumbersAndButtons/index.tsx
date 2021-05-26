import React from 'react';

import { NumbersArea, ButtonsOptions,
  GameButtonOptions, GameButtonText } from './styles';

import Number from '../Number';

interface ISelectedNumbersAndButtonsProps {
  selectedNumbers: number[]
  color: string
  removeHandler: (number: any) => any;
  completeGameHandler: () => void;
  clearGameHandler: () => void;
  addGameHandler: () => void;
}


const SelectedNumbersAndButtons: React.FC<ISelectedNumbersAndButtonsProps> =
 ({ removeHandler, completeGameHandler, clearGameHandler, addGameHandler, selectedNumbers, color }) => {
  return (
    <>
      <NumbersArea>
        {selectedNumbers.map(number => (
          <Number 
            size="small"
            value={number.toString()}
            key={number}
            onPress={() => removeHandler(number) }
            title={number.toString()}
            color={color}
            isActive={true}
            >
            {number}
          </Number> 
        ))}
      </NumbersArea>

      <ButtonsOptions>

        <GameButtonOptions onPress={completeGameHandler} >
          <GameButtonText>
            Complete Game
          </GameButtonText>
        </GameButtonOptions>
        
        <GameButtonOptions onPress={clearGameHandler}>
          <GameButtonText>
            Clear Game
          </GameButtonText>
        </GameButtonOptions>

        <GameButtonOptions onPress={addGameHandler} addToCart={true}>
          <GameButtonText addToCart={true}>
            Add To Cart
          </GameButtonText>
        </GameButtonOptions>


      </ButtonsOptions>
    </>
  );
}

export default SelectedNumbersAndButtons;