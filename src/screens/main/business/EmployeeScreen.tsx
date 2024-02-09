import { Button, Icon, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../../../utils/colors'
import BottomHeader from '../../../components/BottomHeader'

function EmployeeScreen() {
    return (
        <View style={styles.container}>
            <View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <BottomHeader txt={"Employee Account"}/>
                    <Button
                        title="Save"
                        buttonStyle={{ backgroundColor: COLORS.textColor }}
                        titleStyle={{
                            color: 'white',
                        }}
                    />
                </View>

            </View>
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
export default EmployeeScreen