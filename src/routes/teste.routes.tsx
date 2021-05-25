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
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('')

  const test = async() => {
    try {
      console.log('[beginning]')
      setLoading(true)
      console.log('.')
      const token = await AsyncStorage.getItem('#@tgltoken@#')
      console.log('[Token received]')
      
        console.log('[has token] ', token)
        setToken(token)
        setUserIsLogged(true)
      
    } catch (err) {
      console.log('.')
      setUserIsLogged(false)
      console.log('.')
      console.log('[doesnt have token]')
    }
  }

  useEffect(() => {
      test()
      console.log('[user is logged] ', userIsLogged)
      console.log('[token] ', token)
      console.log('[loading] ', loading)
      return () => {}
  }, [userIsLogged])

  const AppStack = () => (
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
  )

  const AuthStack = () => (
    <Auth.Navigator
        initialRouteName='login'
        screenOptions={ { headerShown: false } }
       >
        {userIsLogged
          ? <Auth.Screen name='app' component={AppStack} />
          : (
            <>
              <Auth.Screen name='login' component={Login} />
              <Auth.Screen name='signup' component={SignUp} />
              <Auth.Screen name='forgotpass' component={ForgotPass} />
            </>
          )
        }
      </Auth.Navigator>
  )

  return (
    <AuthStack />
  )
}

export default routes;