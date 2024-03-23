import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../utils/colors'
import { useSelector } from 'react-redux'

function CenterHeaderComponent() {
    const headerData = useSelector(state => state.header.headername);
  return (
   <View style={{padding: 13, alignItems: 'center', flexDirection: 'row'}}>
     <Text style={{ fontFamily: 'Lato-Black', fontSize: 25, color: COLORS.black }}>{headerData}</Text>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.staffBackground,
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },


})

export default CenterHeaderComponent