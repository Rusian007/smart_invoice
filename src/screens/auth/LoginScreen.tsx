import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LinearGradient, RadialGradient } from 'react-native-gradients';
import { COLORS } from '../../utils/colors';
import { Text } from '@rneui/base';
import GradientComponent from '../../components/GradientComponent';
import { Icon } from "@rneui/base";
import { Input, Button } from '@rneui/themed';

function LoginScreen({ navigation }) {
  const [secure, setSecure] = React.useState(true);

  const Header = () => {
    return (

      <View style={styles.headerContainer}>
        <Text style={{ ...styles.text, fontFamily: 'Lato-Bold' }}>Welcome</Text>
        <Icon name='bat' size={40} type="material-community" />
      </View>

    )
  }

  const Main = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginBottom: 50 }}>
        <Text style={{ ...styles.h1Style, fontFamily: 'Lato-Black' }} >SMART INVOICE</Text>

        <Text style={{ fontSize: 15, color: COLORS.black, fontFamily: 'Lato-Regular' }}>Login</Text>
      </View>
    )
  }


  const Inputs = () => {
    return (
      <View>
        <View>
          <Input inputContainerStyle={{ borderColor: COLORS.black }}
            placeholder='Phone Number'
            style={styles.inputStyle}
            placeholderTextColor={COLORS.black} />
        </View>

        <View style={{ marginBottom: -15 }}>
          <Input secureTextEntry={secure}
            inputContainerStyle={{ borderColor: COLORS.black, }}
            placeholder='Password'
            placeholderTextColor={COLORS.black}
            style={styles.inputStyle}
            rightIcon={
              <Icon name='eye-outline' size={30} type="material-community" onPress={() => setSecure(x => !x)} />
            }
          />
        </View>

        <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20 }}>
          <Text style={{ fontSize: 15, color: COLORS.black, fontFamily: 'Lato-Regular' }}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          onPress={() => navigation.replace('Home')}
          type='clear' containerStyle={{ backgroundColor: COLORS.textColor, paddingVertical: 5 }}>
          <Text style={{ color: COLORS.lightColor, fontSize: 16, fontFamily: 'Lato-Bold' }}>
            Log In
          </Text>
        </Button>
      </View>
    )
  }


  return (
    <>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false}>
        <GradientComponent />
        <View style={styles.mainContainer}>
          <View>
            <Header />

            <Main />

            <Inputs />
          </View>


          <View style={styles.footerStyle}>
            <Text style={{ color: COLORS.black, fontSize: 15, fontFamily: 'Lato-Regular' }}> Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.black, fontSize: 15, fontFamily: 'Lato-Black' }}> Contact </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </>

  )
}
const styles = StyleSheet.create({

  mainContainer: {
    ...StyleSheet.absoluteFillObject, // Position the text container to cover the entire container
    paddingHorizontal: 40,
    paddingVertical: 15,
    zIndex: 1, // Ensure the text appears above the gradient
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 18,
    color: COLORS.textColor, // Text color
    marginRight: 5,
    fontFamily: 'Lato-Black'
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 65
  },
  h1Style: {
    lineHeight: 65,
    color: COLORS.textColor,
    fontSize: 65
  },
  inputStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 15
  }
  ,
  footerStyle: {
    marginBottom: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

export default LoginScreen