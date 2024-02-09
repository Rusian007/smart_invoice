import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const Stack = createStackNavigator();
function Main() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
   
        </Stack.Navigator>
      );
}

export default Main