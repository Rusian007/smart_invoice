import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomHeader from '../../../../components/BottomHeader'
import { COLORS } from '../../../../utils/colors'

function BusinessScreen() {
  return (
    <View style={styles.container}>
         <BottomHeader txt={"Business Account"}/>
    </View>
  )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightBackgroundColor,
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    }
})

export default BusinessScreen