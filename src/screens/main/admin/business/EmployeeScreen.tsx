import { Button, Icon, Text } from '@rneui/base'
import React from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { COLORS } from '../../../../utils/colors'
import BottomHeader from '../../../../components/BottomHeader'
import { CheckBox } from '@rneui/themed';
import SelectDropdown from 'react-native-select-dropdown'
import HorizontalLine from '../../../../components/HorizontalLine'
import { ScrollView } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
function EmployeeScreen() {
    const roles = ["Cashier", "Waiter", "Admin"];
    const [activationStatus, setActivationStatus] = React.useState(false);
    const route = useRoute();
    const { item } = route.params;


    const InputForm = () => {
        return (
            <View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Role: </Text>
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

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Name: </Text>
                    <TextInput placeholder='Enter Name' style={styles.inputStyle} />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Phone Number: </Text>
                    <TextInput placeholder='Enter Phone' style={styles.inputStyle} />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Password: </Text>
                    <TextInput secureTextEntry placeholder='Enter Password' style={styles.inputStyle} />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Address: </Text>
                    <TextInput placeholder='Enter Address' style={styles.inputStyle} />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Activation Status: </Text>
                    <CheckBox
                        checked={activationStatus}
                        onPress={() => { setActivationStatus(x => !x) }}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, }}
                    />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Discount Access: </Text>
                    <CheckBox
                        checked={false}
                        onPress={() => { }}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, }}
                    />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Receipt Access: </Text>
                    <CheckBox
                        checked={false}
                        onPress={() => { }}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, }}
                    />
                </View>
            </View>
        )
    }


    const ViewForm = () => {
        return (
            <View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Role: </Text>
                    <Text style={styles.InputLabel}>Cashier </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Name: </Text>
                    <Text style={styles.InputLabel}>Dummy Name </Text>
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Phone Number: </Text>
                    <Text style={styles.InputLabel}>018373***40 </Text>
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Password: </Text>
                    <Text style={styles.InputLabel}>********** </Text>
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Address: </Text>
                    <Text style={styles.InputLabel}>32, Dummy, Address -1000 </Text>
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Activation Status: </Text>
                    <CheckBox
                        checked={true}

                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, }}
                    />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Discount Access: </Text>
                    <CheckBox
                        checked={false}

                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, }}
                    />
                </View>

                <HorizontalLine color={'gray'} style={{ marginTop: 5, marginBottom: 15 }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.InputLabel}>Receipt Access: </Text>
                    <CheckBox
                        checked={true}

                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, }}
                    />
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 50 }}>
                        <BottomHeader txt={"Employee Account"} />

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
let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightBackgroundColor,
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        marginBottom: 20
    }
    , InputLabel: {
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
export default EmployeeScreen