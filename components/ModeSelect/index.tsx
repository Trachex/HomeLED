import React from 'react'
import { ButtonGroup } from 'react-native-elements'
import { Text } from 'react-native';

import styles from './styles';

const ModeSelect: React.FC<propTypes> = ({ selected, onChange, buttons }) => {
  return (
    <>
        <Text style={styles.subHeader}>Modes:</Text>
        <ButtonGroup
            buttons={buttons}
            selectedIndex={selected}
            onPress={(value) => {
                onChange(value);
            }}
            containerStyle={styles.containerStyle}
            selectedButtonStyle={styles.selectedButtonStyle}
            textStyle={styles.textStyle}
        />
    
    </>
  )
}

interface propTypes {
    selected: number,
    onChange: Function,
    buttons: Array<string>
};

export default ModeSelect;