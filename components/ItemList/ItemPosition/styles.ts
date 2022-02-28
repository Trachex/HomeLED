import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
        width:  Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.10,
    },
    text: {
        fontSize: 24,
        fontWeight: '600'
    }
});