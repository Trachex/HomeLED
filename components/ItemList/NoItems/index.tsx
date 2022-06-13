import React from 'react';
import { Text, Image } from 'react-native';
import { Surface } from "@react-native-material/core";

import styles from './styles';

const NoItems: React.FC<{}> = () => {
    return (
        <Surface elevation={1} category="medium" style={styles.wrapper}>
            <Image source={ require('../../../assets/led.png') } style={styles.img}/>
            <Text style={styles.statement}>Yoy haven't added any lights yet</Text>
            <Text style={styles.suggestion}>Press "+" to add a light</Text>
        </Surface>
    );
};

export default NoItems;