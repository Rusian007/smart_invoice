import React from 'react'
import { StyleSheet, View } from 'react-native'
import HomeHeader from '../../components/HomeHeader';
import { COLORS } from '../../utils/colors';
import { Text } from '@rneui/base';
import HomeFooterComponent from '../../components/HomeFooterComponent';
import SelectItemsComponent from '../../components/SelectItemsComponent';
import HorizontalLine from '../../components/HorizontalLine';

function SetBusinessScreen({navigation}) {
    return (
        <View style={styles.container}>

            <View>
                <HomeHeader />
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, marginBottom: 10 }}>HOME{' >'}SET BUSINESS </Text>

                <SelectItemsComponent
                    title={"BUSINESS ACCOUNT"}
                    description={"NEW, EDIT, DELETE"}
                    navigation={navigation}
                    Iconparams={{ name: 'office-building-cog-outline', size: 40, type: 'material-community' }}
                    screenName={"BusinessScreen"} />
                <HorizontalLine />

                <SelectItemsComponent
                    title={"EMPLOYEE ACCOUNT"}
                    description={"NEW, EDIT, DELETE"}
                    navigation={navigation}
                    Iconparams={{ name: 'users-cog', size: 35, type: 'font-awesome-5' }}
                    screenName={"EmployeListScreen"} />
                <HorizontalLine />

                <SelectItemsComponent
                    title={"ITEMS/CATEGORY"}
                    description={"NEW, EDIT, DELETE"}
                    navigation={navigation}
                    Iconparams={{ name: 'pricetags', size: 36, type: 'ionicon' }}
                    screenName={"ItemCatScreen"} />
                <HorizontalLine />
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

});


export default SetBusinessScreen