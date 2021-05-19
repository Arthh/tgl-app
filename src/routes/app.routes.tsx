import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import { View } from 'react-native';


const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "home") {
            return (
              <View>
                <Ionicons name="ios-home-outline" size={30} color='#B5C401' />
              </View>
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
        <App.Screen name="home" component={Home} />
    </App.Navigator>
  );
}

export default AppRoutes;