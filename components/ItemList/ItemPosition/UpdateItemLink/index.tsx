import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

const UpdateItemLink: React.FC<propTypes> = ({ navigate, id }) => {
    return (
        <TouchableHighlight onPress={() => { navigate("UpdateItem", { id }) }} activeOpacity={0.6} underlayColor="#9c9825">
            <Icon name='settings' />
        </TouchableHighlight>
    );
}

interface propTypes {
    navigate: Function,
    id: string
}

export default UpdateItemLink;