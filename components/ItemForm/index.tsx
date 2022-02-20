import React, { useState } from 'react';
import { TouchableHighlight, Text, TextInput, View } from 'react-native';
import styles from './styles';

const ItemForm: React.FC<propTypes> = (props) => {
    const [name, setName] = useState<string>();
    const [ip, setIp] = useState<string>();
    const [pixels, setPixels] = useState<number>(50);

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
            <TouchableHighlight onPress={() => props.submit({ name, ip, pixels })} style={styles.button} activeOpacity={0.6} underlayColor="#9c9825">
                <Text style={styles.text}>Submit</Text>
            </TouchableHighlight>
        </View>
    );
}

interface propTypes {
    submit: Function
}

export default ItemForm;