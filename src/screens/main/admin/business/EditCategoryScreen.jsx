import React from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { COLORS } from '../../../../utils/colors'
import { Button, Card, Text } from '@rneui/base'
import BottomHeader from '../../../../components/BottomHeader'
import Picker from '../../../../components/ColorPicker'
import HorizontalLine from '../../../../components/HorizontalLine'
import { useRoute } from '@react-navigation/native'
import { Input } from '@rneui/themed'


function EditCategoryScreen({ navigation }) {
    const route = useRoute();
    const { item } = route.params;
    const [selectedColor, setSelectedColor] = React.useState('#888888');
    const handleColorChange = (color) => {
        setSelectedColor(color);
        console.log(color);
    };
    const SelectedColorComponent = () => {
        return (
            <View style={{ backgroundColor: selectedColor, width: 100, height: 50, borderRadius: 8 }} />
        );
    }

    const SelectOptionsComponent = () => {
        return (
            <View style={{ marginTop: 60 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: 'gray' }}> Category Name: </Text>
                    {item ? (
                        <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: COLORS.black }}> {item} </Text>
                    ) : (
                        <TextInput placeholder='Enter Category' style={styles.inputStyle} />
                    )}
                </View>
                <HorizontalLine style={{ marginTop: 10, marginBottom: 10 }} color={'gray'} />
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: 'gray', marginRight: 10 }}> Color:  </Text>
                    <SelectedColorComponent />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

                <View style={{ width: '100%' }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <BottomHeader txt={"Items/Category"} />
                        <Button
                            title="Save"
                            buttonStyle={{ backgroundColor: COLORS.textColor }}
                            titleStyle={{
                                color: 'white',
                            }}
                        />
                    </View>

                    <View style={{ backgroundColor: COLORS.textColor, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: 'white', textTransform: 'uppercase', textAlign: 'center' }}>
                            category
                        </Text>
                    </View>

                    <SelectOptionsComponent />


                    <HorizontalLine style={{ marginTop: 10, marginBottom: 10 }} color={'gray'} />

                    <Picker handleColorChange={handleColorChange} />
                </View>


                <View style={{ width: '100%' }}>
                    <Button color={'error'} title="DELETE" titleStyle={{ color: 'white', fontFamily: 'Lato-Regular' }} />
                </View>

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        marginBottom: 20,
        flex: 1,
        backgroundColor: COLORS.lightBackgroundColor,

    },
    inputStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        height: '100%',
        width: '50%',
        padding: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth:1,
        borderColor: 'gray',
    }
})
export default EditCategoryScreen