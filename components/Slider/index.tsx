import React from 'react';
import { View } from 'react-native';
import { Slider, Text, Icon } from 'react-native-elements';

import styles from './styles';

const SliderComponent: React.FunctionComponent<propTypes> = ({ sliderName, minValue, maxValue, onChange, sliderValue }) => {

    const setValue = (val: number): void => {
        onChange(val);
    };

    return (
    <>
        <View style={[styles.contentView]}>
            <Slider
            value={sliderValue}
            onValueChange={setValue}
            maximumValue={maxValue}
            minimumValue={minValue}
            step={1}
            allowTouchTrack
            trackStyle={{ height: 5, backgroundColor: 'transparent' }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
            thumbProps={{
            children: (
                <Icon
                    name="adjust"
                    type="font-awesome"
                    size={20}
                    reverse
                    containerStyle={{ bottom: 20, right: 20 }}
                    color={'#9c9825'}
                />
            ),
            }}
        />

        <Text style={styles.text}> {sliderName}: {sliderValue}</Text>
      </View>
    </>
  );
};

interface propTypes {
    minValue: number,
    maxValue: number,
    onChange: Function,
    sliderName: string,
    sliderValue: number
};

export default SliderComponent;