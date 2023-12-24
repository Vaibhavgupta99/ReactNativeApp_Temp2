import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Product from './src/pages/Product';
import Cart from './src/pages/Cart';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Product" component={Product} />
        <Stack.Screen options={{headerShown: false}} name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>


























































  );
}

export default App;