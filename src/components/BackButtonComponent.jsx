
import { Icon, Text } from "@rneui/base";
import { COLORS } from "../utils/colors";
import { TouchableOpacity } from "react-native";
const BackButtonComponent = ({ navigation }) => {
    return (
        <TouchableOpacity style={{ padding: 10, alignItems: 'center', flexDirection: 'row', }} onPress={() => { navigation.goBack() }}>
            <Icon name='arrow-u-left-top-bold' color={'gray'} size={40} type="material-community" />
            <Text style={{ color: COLORS.black, fontSize: 16, fontFamily: 'Lato-Regular' }}> Back </Text>
        </TouchableOpacity>
    )
}

export default BackButtonComponent;