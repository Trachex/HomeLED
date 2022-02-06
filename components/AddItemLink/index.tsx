import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const AddItemLink: React.FC<propTypes> = (props) => {
    return (
        <TouchableHighlight onPress={() => { props.navigate("AddItem") }} style={styles.button} activeOpacity={0.6} underlayColor="#9c9825">
                <Text style={styles.text}>+</Text>
        </TouchableHighlight>
    );
}

interface propTypes {
    navigate: Function
}

export default AddItemLink;