import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dbd635",
        padding: 10,
        width:  Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        marginVertical: 10,
        marginHorizontal: Dimensions.get('window').width * 0.425
    },
    text: {
        fontSize: 24,
        fontWeight: '600'
    }
});