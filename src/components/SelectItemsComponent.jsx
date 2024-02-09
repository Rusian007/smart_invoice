import { Icon, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

function SelectItemsComponent({ title, description, Iconparams, navigation , screenName}) {
    return (
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