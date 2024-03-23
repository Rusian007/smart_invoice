import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native'
import { Icon, Text } from '@rneui/base'
import { COLORS } from '../utils/colors'
import { useSelector } from 'react-redux';

function RightHeaderComponent() {
    const headerData = useSelector(state => state.header);
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('white', false)} // Set the ripple color to red
            onPress={() => { }}>
            <View style={styles.container}>
                {headerData.cartItems ? (
                    <View style={styles.cartNumberStyle}>
                        <Text style={{ color: 'white' }}>{headerData.cartItems}</Text>
                    </View>
                ) : (<></>)
                }
                <Icon name={'shoppingcart'} size={35} type={'antdesign'} />
            </View >
        </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        flexDirection: 'row',

    },
    cartNumberStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: COLORS.textColor,
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    }
})
export default RightHeaderComponent