import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const ItemPosition: React.FC<propTypes> = ({ navigate, name }) => {
    
    return (
        <TouchableHighlight onPress={() => { navigate('Item', { name }) }}> 
            <Text>{ name }</Text>

        </TouchableHighlight>
    );
};

interface propTypes {
    navigate: any,
    name: string
};

export default ItemPosition;

// style