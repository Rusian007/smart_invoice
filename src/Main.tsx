import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/main/HomeScreen';
import { Header } from '@rneui/themed'
import { Icon } from "@rneui/base";
import { COLORS } from './utils/colors';
import BackButtonComponent from './components/BackButtonComponent';
import SetBusinessScreen from './screens/main/SetBusinessScreen';
import BusinessScreen from './screens/main/business/BusinessScreen';
import EmployeeScreen from './screens/main/business/EmployeeScreen';
import EmployeeListScreen from './screens/main/business/EmployeeListScreen';
import ItemCatScreen from './screens/main/business/ItemCatScreen';
import EditCategoryScreen from './screens/main/business/EditCategoryScreen';
import CategoryList from './screens/main/business/CategoryListScreen';

const Stack = createStackNavigator();


function Main() {



  const Home = ({ navigation }) => {
    return (
      <>
        <StatusBar hidden={true} />
        <Header
          containerStyle={{
            backgroundColor: COLORS.lightBackgroundColor,
            justifyContent: 'space-around',
          }}
          placement="left"
          leftComponent={<BackButtonComponent navigation={navigation} />}
        />
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

          <Stack.Screen name="SetBusinessScreen" component={SetBusinessScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />

          <Stack.Screen name="BusinessScreen" component={BusinessScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />

          <Stack.Screen name="EmployeListScreen" component={EmployeeListScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />

          <Stack.Screen name="EmployeCreateScreen" component={EmployeeScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid, // Apply slide-from-right transition
          }} />

          <Stack.Screen name="CategoryEditScreen" component={EditCategoryScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid, // Apply slide-from-right transition
          }} />


          <Stack.Screen name="CategoryListScreen" component={CategoryList} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />

          <Stack.Screen name="ItemCatScreen" component={ItemCatScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />

        </Stack.Navigator>
      </>

    )
  }

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Main