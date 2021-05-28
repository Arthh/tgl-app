import React, { useCallback, useEffect, useState } from 'react';
import AuthForm from '../../components/AuthForm';
import FirstFooter from '../../components/FirstFooter';
import { Animated, Text, View, Image } from 'react-native';
import { Container, Title, SubTitle, TertiaryTitle } from './styles';

const Login: React.FC = () => {
  const [ animation ] = useState(new Animated.Value(0));
  const [active, setActive] = useState(false);

  useEffect(() => {
    Animated.timing(animation, { toValue: 1000, duration: 2500, useNativeDriver: true }).start();
    setActive(true);
}, [])

  const doAnimationHandler = () => {
    Animated.timing(animation, { toValue: 1000, duration: 1000, useNativeDriver: true }).start();
  }

  return (
    <Container>
      {/* {active && (
        <Animated.View onTouchStart={doAnimationHandler} style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1,
          backgroundColor: 'transparent',
          transform: [{ translateY: animation }]
        }} >
          <View style={{ justifyContent: 'center', alignItems: 'center' }} />
            <Text style={{ color: '#000', position: 'absolute', top: 100, fontSize: 25, fontWeight: 'bold' }}>X</Text>
            <Image source={require('../../assets/bets.png')} />
            <Title>The Geatest App</Title>
            <SubTitle>For</SubTitle>
            <TertiaryTitle>LOTTERY</TertiaryTitle>
        </Animated.View>
      )}   */}
      <AuthForm />
      <FirstFooter />
    </Container>
  );
}

export default Login;