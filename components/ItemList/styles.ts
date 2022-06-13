import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "column",
        marginTop:  Dimensions.get('window').height * 0.15,
        marginHorizontal: Dimensions.get('window').width * 0.1
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: "center",
        marginVertical: 10
    }
});