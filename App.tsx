/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { store } from './src/store';


function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
