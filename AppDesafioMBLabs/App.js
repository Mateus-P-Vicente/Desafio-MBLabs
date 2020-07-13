import * as React from 'react';

import Home from './Home.js'
import Event from './Event.js'
import Search from './Search.js'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'NOW Events', headerTintColor: '#00A2E8'}}/>
        <Stack.Screen name="Event" component={Event} options={{title: 'Evento', headerTintColor: '#00A2E8'}}/>
        <Stack.Screen name="Search" component={Search} options={{title: 'Busca', headerTintColor: '#00A2E8'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;