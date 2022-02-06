import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginVertical: 10
    },
    input: {
        width:  Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.1,
        marginHorizontal: Dimensions.get('window').width * 0.15,
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 24,
        fontWeight: "500"
    },
    pixelText: {
        fontSize: 24,
        fontWeight: "500",
        color: "gray",
        textAlign: "center"
    },
    pixelInput: {
        width:  Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.08,
        marginHorizontal: Dimensions.get('window').width * 0.3,
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 24,
        fontWeight: "500"
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dbd635",
        padding: 10,
        width:  Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.2,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        marginVertical: 10,
        marginHorizontal: Dimensions.get('window').width * 0.35
    },
    text: {
        fontSize: 24,
        fontWeight: '600'
    }
});