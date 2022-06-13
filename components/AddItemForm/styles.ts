import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 20,
        padding: 10,
        width: "90%",
        marginHorizontal: Dimensions.get('window').width * 0.05,
    },
    input: {
        width:  "70%",
        height: "10%",
        marginHorizontal: Dimensions.get('window').width * 0.15,
        marginVertical: 20
    },
    button: {
        marginVertical: 10
    }
});