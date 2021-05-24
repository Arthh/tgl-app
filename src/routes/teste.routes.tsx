import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Home from '../screens/Home';
import Account from '../screens/Account';
import NewBet from '../screens/NewBet';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';
import { createStackNavigator } from '@react-navigation/stack';

const Auth = createStackNavigator();

const App = createBottomTabNavigator();


const routes: React.FC = () => {
  const [userIsLogged, setUserIsLogged] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false)
      const loadData = async() => {
        setLoading(true)
        const token = await AsyncStorage.getItem('#@tgltoken@#');
        setUserIsLogged(token);
        console.log('tokenUser linha 29 :', token)
        return
      }

      loadData()
  }, [loading])

  console.log('lionha 36:', userIsLogged);

      return userIsLogged ? 
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
                {/* <Image source={require('../assets/bets.png')} style={{ width: 80, height: 80 }}/> */}
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
        
        : 

      <Auth.Navigator
        initialRouteName='login'
        screenOptions={ { headerShown: false } }
       >
        <Auth.Screen name='login' component={Login} />
        <Auth.Screen name='signup' component={SignUp} />
        <Auth.Screen name='forgotpass' component={ForgotPass} />
      </Auth.Navigator>
      
  
}

export default routes;