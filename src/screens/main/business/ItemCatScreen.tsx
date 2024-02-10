import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../../../utils/colors'
import { Button, Icon, Text } from '@rneui/base'
import BottomHeader from '../../../components/BottomHeader'

function ItemCatScreen({navigation}) {
    return (
        <View style={styles.container}>
            <BottomHeader txt={"Item Category"} />

            <View style={{ marginTop: 60 }}>

                <View style={{ marginBottom: 10 }}>
                    <Button
                        title=" CATEGORY "
                        buttonStyle={{ backgroundColor: COLORS.textColor }}
                        titleStyle={{
                            color: 'white',
                            fontFamily: 'Lato-Regular',
                            textTransform: 'uppercase'
                        }}
                        onPress={() => navigation.navigate('CategoryListScreen')}
                    />
                </View>

                <View>
                    <Button
                        title=" ITEMS "
                        buttonStyle={{ backgroundColor: COLORS.textColor }}
                        titleStyle={{
                            color: 'white',
                            fontFamily: 'Lato-Regular',
                            textTransform: 'uppercase'
                        }}
                        onPress={() => navigation.navigate('ItemListScreen')}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        marginBottom: 10,
        flex: 1,
        backgroundColor: COLORS.lightBackgroundColor
    }
})
export default ItemCatScreen