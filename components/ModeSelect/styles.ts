import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    subHeader: {
        fontSize: 24,
        fontWeight: '600',
        textAlign : "center",
        marginVertical: 10,
        color: 'black'
    },
    containerStyle: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.4
    },
    selectedButtonStyle: {
        backgroundColor: '#9c9825'
    },
    textStyle: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black'
    }
})