import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { COLORS } from '../../../../utils/colors'
import BottomHeader from '../../../../components/BottomHeader'
import { Text } from '@rneui/base'
import StaffComponent from '../../../../components/StaffComponent'
import { FAB } from '@rneui/themed';

function CategoryList({ navigation }) {
    const data = ["Burger", "Noodles", "Pizza", "Dinner"];

    return (
        <>
            <ScrollView >
                <View style={styles.container}>
                    <BottomHeader txt={"Items/Category"} />
                    <View style={{ backgroundColor: COLORS.textColor, padding: 10, marginTop: 10, marginBottom: 30 }}>
                        <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: 'white', textTransform: 'uppercase', textAlign: 'center' }}>
                            category
                        </Text>
                    </View>

                    {data.map((item, index) => (
                        <StaffComponent item={item} title={item} navigation={navigation} screenName={"CategoryEditScreen"} />
                    ))}
                </View>

            </ScrollView>
            <FAB
                visible={true}
                placement="right"
                icon={{ name: 'add', color: 'white' }}
                color={COLORS.backgroundColor}
                onPress={() => navigation.navigate('CategoryEditScreen', { item: false })}
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

export default CategoryList