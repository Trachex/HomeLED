import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 20,
        padding: 10
    },
    input: {
        width: "70%",
        height: "10%",
        marginHorizontal: Dimensions.get('window').width * 0.15,
        marginVertical: 10,
        padding: 10
    },
    pixelInput: {
        width: "40%",
        marginHorizontal: Dimensions.get('window').width * 0.3,
        marginVertical: 10
    },
    button: {
        padding: 10,
        marginVertical: 10,
        width: "30%",
        marginHorizontal: Dimensions.get('window').width * 0.35
    }
});