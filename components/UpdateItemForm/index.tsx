import React, { useState } from 'react';
import { TextInput, Button, Surface } from "@react-native-material/core";

import { ItemType } from '../../features/items/types';
import styles from './styles';

const ItemForm: React.FC<propTypes> = ({ submit, defaultsObj }) => {
    const [name, setName] = useState<string>(defaultsObj?.name || '');
    const [ip, setIp] = useState<string>(defaultsObj?.ip || '');
    const [ledCount, setLedCount] = useState<number>(defaultsObj?.ledCount || 1);

    const changePixels = (input: string): void => {
        input === '' 
        ? setLedCount(0)
        : setLedCount(parseInt(input));
    };

    return (
        <Surface style={styles.container} >
            <TextInput label='Name' value={name} onChangeText={setName} autoComplete="off" style={styles.input} variant="outlined" />
            <TextInput label='Ip address' value={ip} onChangeText={setIp} keyboardType="numeric" style={styles.input} variant="outlined" />
            <TextInput label='Pixel Count' value={ledCount.toString()} onChangeText={changePixels} keyboardType="numeric" style={styles.pixelInput} variant="outlined" />

            <Button onPress={() => submit({ name, ip, ledCount, id: defaultsObj?.id })} title="Save" style={styles.button}/>
        </Surface>
    );
}

interface propTypes {
    submit: Function,
    defaultsObj: ItemType | undefined
}

export default ItemForm;