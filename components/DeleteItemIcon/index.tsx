import React from 'react';
import { IconButton } from "@react-native-material/core";
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './style';

const DeleteItemIcon: React.FC<propTypes> = ({ deleteFn }) => {
    return (
        <View style={styles.container}>
            <IconButton icon={<Icon name='delete' tvParallaxProperties />}  onPress={() => { deleteFn() }} />
        </View>
    );
}

interface propTypes {
    deleteFn: Function
}

export default DeleteItemIcon;