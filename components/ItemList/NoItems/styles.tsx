import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        height: Dimensions.get('window').height * 0.4,
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
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
        textAlign: "center"
    },
    img: {
        marginTop: 20
    }
});