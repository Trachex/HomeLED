import React from 'react';
import { ListItem } from "@react-native-material/core";

import UpdateItemLink from './UpdateItemLink';
import styles from './styles';

const ItemPosition: React.FC<propTypes> = ({ navigate, id, name }) => {
    
    return (
        <ListItem 
            title={name} 
            onPress={() => { navigate('Item', { id }) }} 
            trailing={<UpdateItemLink navigate={navigate} id={id} />} 
        />
    );
};

interface propTypes {
    navigate: any,
    name: string,
    id: string
};

export default ItemPosition;