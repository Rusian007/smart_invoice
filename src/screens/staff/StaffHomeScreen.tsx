import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../utils/colors'
import HomeHeader from '../../components/HomeHeader'
import SelectItemsComponent from '../../components/SelectItemsComponent'
import HorizontalLine from '../../components/HorizontalLine'

function StaffHomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <HomeHeader />

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, marginBottom: 10, color: COLORS.black }}>HOME</Text>

                <SelectItemsComponent
                    title={"Items"}
                    description={"select iems, make bill"}
                    navigation={navigation}
                    Iconparams={{ name: 'shoppingcart', size: 40, type: 'antdesign' }}
                    screenName={"ItemSelectScreen"} />
                <HorizontalLine />

                <SelectItemsComponent
                    title={"Receipts"}
                    description={"Bills, Invoice Search"}
                    navigation={navigation}
                    Iconparams={{ name: 'receipt-outline', size: 40, type: 'ionicon' }}
                    screenName={""} />
                <HorizontalLine />

                <SelectItemsComponent
                    title={"Add Devices"}
                    description={"Search For Bluetooth Devices"}
                    navigation={navigation}
                    Iconparams={{ name: 'printer', size: 40, type: 'antdesign' }}
                    screenName={""} />
                <HorizontalLine />

            </View>
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
    headerContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    itemsContainer: {

    },
    pictureContainer: {
        //  elevation: 2,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,

    },

})

export default StaffHomeScreen