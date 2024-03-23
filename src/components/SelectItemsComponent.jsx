import { Icon, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import { COLORS } from '../utils/colors'

function SelectItemsComponent({ title, description, Iconparams, navigation, screenName }) {
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('white', false)} // Set the ripple color to red
            onPress={() => { navigation.navigate(screenName) }}>
    
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon {...Iconparams} />

                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Lato-Black', fontSize: 18 }}>{title}</Text>
                        <Text style={{ width: 250, fontFamily: 'Lato-Regular', fontSize: 14 }} >{description}</Text>
                    </View>
                </View>

                <Icon name='arrow-right-bold-box' size={35} type="material-community" onPress={() => { navigation.navigate(screenName) }} />

            </View>
        </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
export default SelectItemsComponent