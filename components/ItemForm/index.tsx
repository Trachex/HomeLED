import React, { useState } from 'react';
import { TouchableHighlight, Text, TextInput, View } from 'react-native';

import { ItemType } from '../../store/items/types';
import styles from './styles';

const ItemForm: React.FC<propTypes> = ({ submit, defaultsObj }) => {
    const [name, setName] = useState<string>(defaultsObj?.name || '');
    const [ip, setIp] = useState<string>(defaultsObj?.ip || '');
    const [pixels, setPixels] = useState<number>(defaultsObj?.pixels || 50);

    const changePixels = (input: string): void => {
        input === '' 
        ? setPixels(0)
        : setPixels(parseInt(input));
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder='Name' value={name} onChangeText={setName} autoCompleteType="off" style={styles.input} />

            <TextInput placeholder='Ip address' value={ip} onChangeText={setIp} keyboardType="numeric" style={styles.input} />

            <Text style={styles.pixelText}>Pixel count:</Text>
            <TextInput value={pixels.toString()} onChangeText={changePixels} keyboardType="numeric" style={styles.pixelInput} />

            <TouchableHighlight onPress={() => submit({ name, ip, pixels })} style={styles.button} activeOpacity={0.6} underlayColor="#9c9825">
                <Text style={styles.text}>Submit</Text>
            </TouchableHighlight>
        </View>
    );
}

interface propTypes {
    submit: Function,
    defaultsObj?: ItemType | undefined
}

export default ItemForm;