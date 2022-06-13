import React, { useState } from 'react';
import { TextInput, Button, Surface } from "@react-native-material/core";

import styles from './styles';

const ItemForm: React.FC<propTypes> = ({ submit }) => {
    const [name, setName] = useState<string>('');
    const [ip, setIp] = useState<string>('');

    return (
        <Surface style={styles.container}>
            <TextInput label='Name' value={name} onChangeText={setName} autoComplete="off" style={styles.input} variant="outlined" />
            <TextInput label='Ip address' value={ip} onChangeText={setIp} keyboardType="numeric" style={styles.input} variant="outlined" />

            <Button onPress={() => submit({ name, ip })} title="Save Light" style={styles.button}/>
        </Surface>
    );
}

interface propTypes {
    submit: Function
}

export default ItemForm;