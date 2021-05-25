import React from 'react'
import { View, Text } from 'react-native'

import { Title, Subtitle } from './styles';

interface IBetInfoFill {
  text: string;
}

const BetInfoFill: React.FC<IBetInfoFill> = ({ text }) =>  {
  return (
    <View style={{ marginTop: 10 }}>
      <Title> Fill your bet  </Title>
      <Subtitle> {text} </Subtitle>
    </View>
  )
}

export default BetInfoFill;
