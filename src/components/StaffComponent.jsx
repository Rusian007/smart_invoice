import { Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import { COLORS } from '../utils/colors'

function StaffComponent({ navigation, item, title, screenName }) {
    console.log(item);
    const handleStaffPress = ()=>{
        navigation.navigate(screenName, {item: item})
    }
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('red', false)} // Set the ripple color to red
            onPress={ handleStaffPress}
        >
            <View style={styles.container}>
                <Text h4Style={{ color: COLORS.lightColor }} h4>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.textColor,
        marginBottom: 10
    }
})

export default StaffComponent