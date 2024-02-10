import { Text } from '@rneui/base';
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../utils/colors';

function ItemComponent({ SingleItem, navigation, screenName }) {
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate(screenName, { item: SingleItem })}
        >
            <View style={style.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={style.txtStyle}>{SingleItem.name}</Text>
                <Text style={{...style.txtStyle, marginLeft: 10}}>{SingleItem.price} /-</Text>
            </View>
            <Text style={style.txtStyle}>
                {SingleItem.quantity}
            </Text>
        </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.textColor,
        padding: 10,
        marginBottom: 10,
    },
txtStyle:{
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: 'white',
}
});

export default ItemComponent