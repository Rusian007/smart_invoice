import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomHeader from '../../../components/BottomHeader'
import { COLORS } from '../../../utils/colors'

function SubscriptionListScreen() {
    return (
        <View style={styles.container}>
            <BottomHeader txt={"Subscription"} />

         
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightBackgroundColor,
        paddingHorizontal: 25,

    }
})

export default SubscriptionListScreen