import React from 'react';

import { NumbersArea, ButtonsOptions } from './styles';

import Number from '../Number';

interface ISelectedNumbersAndButtonsProps {
  selectedNumbers: number[]
  color: string
}


const SelectedNumbersAndButtons: React.FC<ISelectedNumbersAndButtonsProps> = ({ selectedNumbers, color }) => {
  return (
    <>
      <NumbersArea>
        {selectedNumbers.map(number => (
          <Number 
            size="small"
            value={number.toString()}
            key={number}
            onPress={() => (console.log(number)) }
            title={number.toString()}
            color={color}
            isActive={true}
            >
            {number}
          </Number> 
        ))}
      </NumbersArea>

      <ButtonsOptions>

      </ButtonsOptions>
    </>
  );
}

export default SelectedNumbersAndButtons;