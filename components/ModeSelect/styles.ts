import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    containerStyle: {
        height: Dimensions.get('window').height * 0.12
    },
    textStyle: {
        fontFamily: 'Roboto',
        fontWeight: "500",
        fontSize: 18,
        color: "#FFF"
    },
    buttonStyle: {
        backgroundColor: "#23036A",
        borderRadius: 4,
    },
    selectedButtonStyle: {
        backgroundColor: '#FFF'
    },
    selectedTextStyle: {
        color: "#6200EE"
    }
})