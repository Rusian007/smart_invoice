import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/main/admin/HomeScreen';
import { Header } from '@rneui/themed'
import { Icon } from "@rneui/base";
import { COLORS } from './utils/colors';
import BackButtonComponent from './components/BackButtonComponent';
import SetBusinessScreen from './screens/main/admin/SetBusinessScreen';
import BusinessScreen from './screens/main/admin/business/BusinessScreen';
import EmployeeScreen from './screens/main/admin/business/EmployeeScreen';
import EmployeeListScreen from './screens/main/admin/business/EmployeeListScreen';
import ItemCatScreen from './screens/main/admin/business/ItemCatScreen';
import EditCategoryScreen from './screens/main/admin/business/EditCategoryScreen';
import CategoryList from './screens/main/admin/business/CategoryListScreen';
import ItemsListScreen from './screens/main/admin/business/ItemsListScreen';
import ItemsEditScreen from './screens/main/admin/business/ItemsEditScreen';
import ReceiptListScreen from './screens/main/admin/receipt/ReceiptListScreen';
import SubscriptionListScreen from './screens/main/admin/subscription/SubscriptionListScreen';
import StaffHomeScreen from './screens/staff/StaffHomeScreen';
import ItemSelectScreen from './screens/staff/ItemSelectScreen';
import CenterHeaderComponent from './components/CenterHeaderComponent';
import RightHeaderComponent from './components/RightHeaderComponent';

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

          <Stack.Screen name="ItemListScreen" component={ItemsListScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />

          <Stack.Screen name="ItemEditScreen" component={ItemsEditScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid, // Apply slide-from-right transition
          }} />

          <Stack.Screen name="ReceiptListScreen" component={ReceiptListScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />

          <Stack.Screen name="SubscriptionListScreen" component={SubscriptionListScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />


          {/* Staff routes */}
          <Stack.Screen name="StaffHome" component={StaffHomeScreen} options={{
            headerShown: false, gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
          }} />

        </Stack.Navigator>
      </>

    )
  }


  const StaffHome = ({ navigation }) => {
    return (<>
      <StatusBar hidden={true} />
      <Header

        containerStyle={{
          backgroundColor: COLORS.staffBackground,
          alignItems: 'center',
        }}
        leftComponent={<BackButtonComponent navigation={navigation} />}
        centerComponent={<CenterHeaderComponent />}
        rightComponent={<RightHeaderComponent />}
      />

      <Stack.Navigator initialRouteName='StaffHomeScreen'>
        <Stack.Screen name="StaffHomeScreen" component={StaffHomeScreen} options={{
          headerShown: false, gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
        }} />
        <Stack.Screen name="ItemSelectScreen" component={ItemSelectScreen} options={{
          headerShown: false, gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
        }} />
      </Stack.Navigator>
    </>
    );
  }

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="StaffHome" component={StaffHome} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Main