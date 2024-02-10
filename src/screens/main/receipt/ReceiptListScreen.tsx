import React from 'react'
import BottomHeader from '../../../components/BottomHeader'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../../../utils/colors'
import { SearchBar } from '@rneui/themed';

function ReceiptListScreen() {
    return (
        <View style={styles.container}>
            <BottomHeader txt={"receipts"} />

            <SearchBar
                placeholder="Type Here..."
                onChangeText={() => { }}
                value={'search'}
                platform='android'
                containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, marginBottom: 20 }}
            />
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


export default ReceiptListScreen