import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import Number from '../Number';

import { Container } from './styles';

interface ICreateNumbersProps {
  quantity: number;
  numbers: number[];
  color: string;
  clickHandler: (number: any) => any;
}

const CreateNumbers: React.FC<ICreateNumbersProps> = ({quantity,clickHandler, color , numbers}) => {
  const [numbersList, setNumbersList] = useState([])

  const formateNumber = (number: number) => { 
    var formated = number < 10 ? `0${number}` : number;
    return formated;
  }

  const verifyNumber = (num: number) : boolean => {
    const resp = numbers.find(number => formateNumber(number) === formateNumber(num));
    return resp ? true : false
  };

  const createArrayNumbers = () => {
    var aux = [];
    for ( var i=1 ; i<=quantity; i++ ) {
     aux.push(i);
    }
    setNumbersList(aux)
  };

  useEffect(() => {
    createArrayNumbers()
  },[quantity])
  

  // const createNumbers = () => {
  //   var aux = [];
  //   for ( var i=1 ; i<=quantity; i++ ) {
  //      aux.push(
  //         <Number 
  //           value={formateNumber(i).toString()}
  //           key={i}
  //           onPress={clickHandler}
  //           title={formateNumber(i).toString()}
  //           color={color}
  //           isActive={verifyNumber(i)}
  //           >
  //           {formateNumber(i)}
  //         </Number> 
  //     )
  //   }
  //   return aux;
  // }  

  return (  
    <Container>
      {numbersList.map(number => (
        <Number 
        size="large"
        value={formateNumber(number).toString()}
        key={number}
        onPress={() => clickHandler(formateNumber(number).toString())}
        title={formateNumber(number).toString()}
        color={color}
        isActive={verifyNumber(number)}
        >
        {formateNumber(number)}
      </Number> 
        
      ))}
    </Container>
  );
};

export default CreateNumbers;