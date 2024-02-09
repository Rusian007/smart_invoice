import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../utils/colors'

function HomeFooterComponent() {
    return (
        <View style={{ marginBottom: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity>
                <Text style={{ color: COLORS.black, fontFamily: 'Lato-Bold', fontSize: 16 }}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ color: COLORS.black, fontFamily: 'Lato-Regular', fontSize: 16 }}>Privacy Policy</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeFooterComponent