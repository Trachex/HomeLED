import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        backgroundColor: "#FFF",
        borderRadius: 4,
        width:  Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.4,
        marginTop:  Dimensions.get('window').height * 0.15,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    statement: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: "center",
        marginVertical: 10,
        padding: 10
    },
    suggestion: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: "center",
    },
    img: {
        marginTop: 20
    }
});