import { Icon, Text } from '@rneui/base'
import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../utils/colors'

function BottomHeader({ txt }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>

            <Icon name='th-list' color={COLORS.black} size={25} type="font-awesome" />
            <Text style={{ fontSize: 25, color: COLORS.textColorLight, marginLeft: 10, fontFamily: 'Lato-Black', textTransform: 'uppercase' }}>{txt}</Text>
        </View>
    )
}

export default BottomHeader