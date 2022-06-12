import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const NoItems: React.FC<{}> = () => {
    return (
        <View style={styles.wrapper}>
            <Image source={ require('../../../assets/led.png') } style={styles.img}/>
            <Text style={styles.statement}>Yoy haven't added any lights yet</Text>
            <Text style={styles.suggestion}>Press "+" to add a light</Text>
        </View>
    );
};

export default NoItems;