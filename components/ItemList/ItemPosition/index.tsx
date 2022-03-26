import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import UpdateItemLink from './UpdateItemLink';
import styles from './styles';

const ItemPosition: React.FC<propTypes> = ({ navigate, id, name }) => {
    
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => { navigate('Item', { id }) }} activeOpacity={0.6} underlayColor="#828282"> 
                <Text style={styles.text}>{ name }</Text>
            </TouchableHighlight>
            <UpdateItemLink navigate={navigate} id={id} />
        </View>
    );
};

interface propTypes {
    navigate: any,
    name: string,
    id: string
};

export default ItemPosition;