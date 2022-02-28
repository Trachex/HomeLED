import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const ItemPosition: React.FC<propTypes> = ({ navigate, name }) => {
    
    return (
        <TouchableHighlight onPress={() => { navigate('Item', { name }) }} style={styles.container} activeOpacity={0.6} underlayColor="#828282"> 
            <Text style={styles.text}>{ name }</Text>

        </TouchableHighlight>
    );
};

interface propTypes {
    navigate: any,
    name: string
};

export default ItemPosition;