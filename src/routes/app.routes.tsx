import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Image, View } from 'react-native';

import Home from '../screens/Home';
import Account from '../screens/Account';
import NewBet from '../screens/NewBet';
import { useAuth } from '../hooks/AuthContext';

const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const { userLogged } = useAuth();
  return (
    <App.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if(route.name === "Home"){
            return (
              <Ionicons name="ios-home-outline" size={30} color='#B5C401' />
            );
          }

          if(route.name === "NewBet"){
            return (
              <View style={{ width: 95, height: 95, borderColor:'#FFF', borderWidth: 5, borderRadius: 100, backgroundColor: '#B5C401', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/bets.png')} style={{ width: 80, height: 80 }}/>
              </View>
            )
          } 

          if(route.name === "Account"){
            return (
                <FontAwesome name="user-o" size={30} color='#B5C401' />
            );
          }

        }
    })}

    tabBarOptions={{
        activeTintColor: '#B5C401',
        inactiveTintColor: '#C1C1C1',
        style: { height: 100, borderTopLeftRadius: 25, borderTopEndRadius: 25, },
        labelStyle: { fontSize: 10, padding: 5, fontWeight: '700', fontStyle: 'italic' },
        iconStyle: { marginTop: 10, },
        tabStyle: {},
    }}

    >
        <App.Screen name="Home" component={ Home } />
        <App.Screen name="NewBet" component={ NewBet }/>
        <App.Screen name="Account" component={ Account } />
    </App.Navigator>
  );
}

export default AppRoutes;