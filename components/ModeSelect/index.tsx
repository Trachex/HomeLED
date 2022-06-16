import React from 'react'
import { ButtonGroup } from 'react-native-elements'

import styles from './styles';

const ModeSelect: React.FC<propTypes> = ({ selected, onChange, buttons }) => {
  return (
    <>
        <ButtonGroup
            buttons={buttons}
            selectedIndex={selected}
            onPress={(value) => {
                onChange(value);
            }}
            containerStyle={styles.containerStyle}
			textStyle={styles.textStyle}
            selectedButtonStyle={styles.selectedButtonStyle}
			selectedTextStyle={styles.selectedTextStyle}
			buttonStyle={styles.buttonStyle}
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