import { StyleSheet, Dimensions } from 'react-native';
import { withTheme } from 'react-native-elements';

export default StyleSheet.create({
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6200EE",
        width:  Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        marginVertical: 20,
        marginHorizontal: Dimensions.get('window').width * 0.4,
        paddingBottom: 3
    },
    text: {
        fontSize: 40,
        fontWeight: '300',
        color: '#FFFFFF'
    }
});