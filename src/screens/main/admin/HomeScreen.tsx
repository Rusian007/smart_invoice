import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../../../utils/colors'
import { Icon } from '@rneui/base';
import { Text } from '@rneui/themed';
import SelectItemsComponent from '../../../components/SelectItemsComponent';
import HorizontalLine from '../../../components/HorizontalLine';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeHeader from '../../../components/HomeHeader';
import HomeFooterComponent from '../../../components/HomeFooterComponent';

function HomeScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <View>
                <HomeHeader />

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, marginBottom: 10 }}>HOME</Text>

                <SelectItemsComponent
                    title={"BUSINESS ANALYTICS"}
                    description={"SALES RECORD, TOP SALE, QUANTITY SALE"}
                    navigation={navigation}
                    Iconparams={{ name: 'bar-chart-outline', size: 40, type: 'ionicon' }}
                    screenName={""} />
                <HorizontalLine />
                <SelectItemsComponent
                    title={"SET BUSINESS"}
                    description={"BUSINESS ACCOUNT, EMPLOYEE ACCOUNT, ITEMS/CATEGOTY"}
                    navigation={navigation}
                    Iconparams={{ name: 'city-variant-outline', size: 40, type: 'material-community' }}
                    screenName={"SetBusinessScreen"} />
                <HorizontalLine />
                <SelectItemsComponent
                    title={"RECEIPTS"}
                    description={"BILLS,INVOICE SEARCH"}
                    navigation={navigation}
                    Iconparams={{ name: 'receipt-outline', size: 40, type: 'ionicon' }}
                    screenName={"ReceiptListScreen"} />
                <HorizontalLine />
                <SelectItemsComponent
                    title={"SUBSCRIPTION "}
                    description={"PAID,DUE"}
                    navigation={navigation}
                    Iconparams={{ name: 'wallet-outline', size: 40, type: 'ionicon' }}
                    screenName={"SubscriptionListScreen"} />

            </View>

            <HomeFooterComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightBackgroundColor,
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

export default HomeScreen