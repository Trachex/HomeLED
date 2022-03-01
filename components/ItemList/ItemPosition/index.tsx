import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import UpdateItemLink from './UpdateItemLink';
import styles from './styles';

const ItemPosition: React.FC<propTypes> = ({ navigate, name }) => {
    
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => { navigate('Item', { name }) }} activeOpacity={0.6} underlayColor="#828282"> 
                <Text style={styles.text}>{ name }</Text>
            </TouchableHighlight>
            <UpdateItemLink navigate={navigate} name={name} />
        </View>
    );
};

interface propTypes {
    navigate: any,
    name: string
};

export default ItemPosition;