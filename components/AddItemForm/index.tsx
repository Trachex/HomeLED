import React, { useState } from 'react';
import { TouchableHighlight, Text, TextInput, View } from 'react-native';

import styles from './styles';

const ItemForm: React.FC<propTypes> = ({ submit }) => {
    const [name, setName] = useState<string>('');
    const [ip, setIp] = useState<string>('');

    return (
        <View style={styles.container}>
            <TextInput placeholder='Name' value={name} onChangeText={setName} autoCompleteType="off" style={styles.input} />

            <TextInput placeholder='Ip address' value={ip} onChangeText={setIp} keyboardType="numeric" style={styles.input} />

            <TouchableHighlight onPress={() => submit({ name, ip })} style={styles.button} activeOpacity={0.6} underlayColor="#9c9825">
                <Text style={styles.text}>Submit</Text>
            </TouchableHighlight>
        </View>
    );
}

interface propTypes {
    submit: Function
}

export default ItemForm;