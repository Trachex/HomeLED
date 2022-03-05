import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './style';

const DeleteItemIcon: React.FC<propTypes> = ({ deleteFn }) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => { deleteFn() }} activeOpacity={0.6} underlayColor="#9c9825">
                <Icon name='delete' />
            </TouchableHighlight>
        </View>
        
    );
}

interface propTypes {
    deleteFn: Function
}

export default DeleteItemIcon;