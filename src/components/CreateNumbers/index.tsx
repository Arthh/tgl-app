import React from 'react';
import { View } from 'react-native';

import Number from '../Number';

import { Container } from './styles';

interface ICreateNumbersProps {
  quantity: number;
  numbers: number[];
  color: string;
  clickHandler(number: string);
}

const CreateNumbers: React.FC<ICreateNumbersProps> = ({quantity,clickHandler, color , numbers}) => {
  
  const formateNumber = (number: number) => { 
    var formated = number < 10 ? `0${number}` : number;
    return formated;
  }

  const verifyNumber = (num: number) : boolean => {
    const resp = numbers.find(number => formateNumber(number) === formateNumber(num));
    return resp ? true : false
  };

  const createNumbers = () => {
    var aux = [];
    for(var i=1 ; i<=quantity; i++){
       aux.push(
          <Number 
            key={i}
            onPress={ () => { const number = formateNumber(i); clickHandler(number.toString()) } }
            title={formateNumber(i).toString()}
            color={color}
            isActive={verifyNumber(i)}
            >
            {formateNumber(i)}
          </Number> 
      )
    }
    return aux;
  }  

  return (  
    <Container>
      {createNumbers()}
    </Container>
  );
};

export default CreateNumbers;