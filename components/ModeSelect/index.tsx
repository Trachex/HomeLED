import React from 'react'
import { ButtonGroup } from 'react-native-elements'
import { Text } from 'react-native';

import styles from './styles';

const ModeSelect: React.FC<propTypes> = ({ selected, onChange }) => {
  return (
    <>
        <Text style={styles.subHeader}>Modes:</Text>
        <ButtonGroup
            buttons={['Mono', 'Rainbow']}
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
    onChange: Function
};

export default ModeSelect;