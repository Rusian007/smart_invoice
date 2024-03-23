import React from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { COLORS } from '../../../../utils/colors'
import BottomHeader from '../../../../components/BottomHeader'
import { Button, Icon, Text } from '@rneui/base'
import HorizontalLine from '../../../../components/HorizontalLine'
import { CheckBox } from '@rneui/themed'
import { useRoute } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown'

function ItemsEditScreen({ navigation }) {

    const roles = ["Burger", "Milk", "Pizza"];
    const [uploadStatus, setUploadStatus] = React.useState(false);
    const route = useRoute();
    const { item } = route.params;


    const InputForm = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Name: </Text>
                    <TextInput placeholder='Enter Item Name' style={styles.inputStyle} />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Category: </Text>
                    <SelectDropdown
                        buttonStyle={{ backgroundColor: 'white', borderRadius: 8, elevation: 5, shadowColor: 'gray' }}
                        data={roles}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            console.log(selectedItem, index);
                            return selectedItem
                        }}
                        renderDropdownIcon={() => (
                            <Icon
                                name='chevron-down'
                                type='font-awesome-5'
                                size={15}
                                color={COLORS.textColor}
                            />
                        )}
                    />
                </View>



                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>PRICE: </Text>
                    <TextInput placeholder='Enter price' style={styles.inputStyle} />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>COST: </Text>
                    <TextInput placeholder='Enter Production Cost' style={styles.inputStyle} />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>QUANTITY: </Text>
                    <TextInput placeholder='[ Enter Quantity ]' style={styles.inputStyle} />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.InputLabel}>Image upload: </Text>
                        <Button title={"Click Here"} type='outline' />
                    </View>
                    <CheckBox
                        checked={uploadStatus}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, }}
                    />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />




            </View>
        )
    }


    const ViewForm = () => {
        return (
            <View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Name: </Text>
                    <Text style={styles.InputLabel}>Cheese Burger </Text>
                </View>
                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Category: </Text>
                    <Text style={styles.InputLabel}>Burger </Text>
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Price: </Text>
                    <Text style={styles.InputLabel}>350 /- </Text>
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Cost: </Text>
                    <Text style={styles.InputLabel}>100  /- </Text>
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Quantity: </Text>
                    <Text style={styles.InputLabel}>[ 32 ]</Text>
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Image Uploaded: </Text>
                    <CheckBox
                        checked={true}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, }}
                    />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />


            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                        <BottomHeader txt={"Items/Category"} />

                        {item ? (
                            <></>
                        ) : (
                            <Button
                                title="Save"
                                buttonStyle={{ backgroundColor: COLORS.textColor }}
                                titleStyle={{ color: 'white' }}
                            />
                        )}

                    </View>

                    <View style={{ backgroundColor: COLORS.textColor, padding: 10, marginTop: 10, marginBottom: 50 }}>
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: 'white', textTransform: 'uppercase', textAlign: 'center' }}>
                            ITEMS
                        </Text>
                    </View>

                    {item ? (
                        <ViewForm />
                    ) : (
                        <InputForm />
                    )}


                </View>

                <View style={{ width: '100%', marginTop: 20 }}>
                    <Button color={'error'} title="DELETE" titleStyle={{ color: 'white', fontFamily: 'Lato-Regular' }} />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        marginBottom: 20,
        flex: 1,
        backgroundColor: COLORS.lightBackgroundColor,

    },
    InputLabel: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: COLORS.black,
        marginRight: 10
    },
    inputStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: COLORS.black,
        padding: 10,
        backgroundColor: 'white',
        width: '50%',
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'gray',
    }
})

export default ItemsEditScreen