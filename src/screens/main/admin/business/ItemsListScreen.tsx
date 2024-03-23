import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { COLORS } from '../../../../utils/colors'
import BottomHeader from '../../../../components/BottomHeader'
import { FAB } from '@rneui/themed'
import { Text } from '@rneui/base'
import ItemComponent from '../../../../components/ItemComponent'

function ItemsListScreen({ navigation }) {
    let data = [
        { name: "item2", price: 100, quantity: 10 },
        { name: "item1", price: 100, quantity: 10 },
        { name: "Cheese Milk", price: 560, quantity: null }
    ]
    return (
        <>
            <ScrollView >
                <View style={styles.container}>
                    <BottomHeader txt={"Items/Category"} />
                    <View style={{ backgroundColor: COLORS.textColor, padding: 10, marginTop: 10, marginBottom: 30 }}>
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: 'white', textTransform: 'uppercase', textAlign: 'center' }}>
                            ITEMS
                        </Text>
                    </View>

                    {data.map((item, index) => (
                        <ItemComponent key={index} navigation={navigation} screenName={"ItemEditScreen"} SingleItem={{ name: item.name, price: item.price, quantity: item.quantity }} />
                    ))}
                </View>

            </ScrollView>
            <FAB
                visible={true}
                placement="right"
                icon={{ name: 'add', color: 'white' }}
                color={COLORS.backgroundColor}
                onPress={() => navigation.navigate('ItemEditScreen', { item: false })}
            />
        </>
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

export default ItemsListScreen