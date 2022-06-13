import React from 'react';
import { IconButton } from "@react-native-material/core";
import { Icon } from 'react-native-elements';

const UpdateItemLink: React.FC<propTypes> = ({ navigate, id }) => {
    return (
        <IconButton icon={<Icon name='settings' tvParallaxProperties />}  onPress={() => { navigate("UpdateItem", { id }) }} />
    );
}

interface propTypes {
    navigate: Function,
    id: string
}

export default UpdateItemLink;