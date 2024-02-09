import { Button, Icon, Text } from '@rneui/base'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { COLORS } from '../../../utils/colors'
import HorizontalLine from '../../../components/HorizontalLine'
import StaffComponent from '../../../components/StaffComponent'
import BottomHeader from '../../../components/BottomHeader'

function EmployeeListScreen({ navigation }) {
    const data = [1, 2, 3, 4, 5];
    return (
        <ScrollView style={styles.container}>
                <BottomHeader txt={"Employee Account"}/>
            <Button
                title="new employee +"
                buttonStyle={{ backgroundColor: COLORS.textColor }}
                titleStyle={{
                    color: 'white',
                    fontFamily: 'Lato-Regular'
                }}
                onPress={() => navigation.navigate('EmployeCreateScreen')}
            />

            <HorizontalLine style={{ marginTop: 15, marginBottom: 15 }} color={'gray'} />

            {data.map((item, index) => (
                <StaffComponent screenName={"EmployeCreateScreen"} item={index} title={"Staff-"+item} navigation={navigation} />
            ))}

        </ScrollView>
    )
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightBackgroundColor,
        paddingHorizontal: 25,
        marginBottom: 10
    }
})

export default EmployeeListScreen