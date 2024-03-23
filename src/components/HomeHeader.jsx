import { Icon, Text } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../utils/colors";

const HomeHeader = () => {
    return (
        <View style={styles.headerContainer}>

            <View style={styles.pictureContainer}>
                <Icon name='user-tie' size={40} type='font-awesome-5' />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, textTransform: 'uppercase', fontFamily: 'Lato-Black', letterSpacing: -0.5 }}>ALI Asgar tamjid</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Icon name='dot-single' color={COLORS.textColor} size={25} type='entypo' />
                    <Text style={{ fontSize: 15, fontFamily: 'Lato-Regular' }}>STATUS | 0183****560</Text>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    headerContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
   
    pictureContainer: {
        //  elevation: 2,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,

    },

})

export default HomeHeader;