import React from 'react';
import { View } from 'react-native';
import { Slider, Text, Icon } from 'react-native-elements';
import { Chip, Divider } from "@react-native-material/core";

import styles from './styles';

const SliderComponent: React.FunctionComponent<propTypes> = ({ sliderName, minValue, maxValue, onChange, sliderValue }) => {

    const setValue = (val: number): void => {
        onChange(val);
    };

    return (
    <>
        <Text style={styles.text}> {sliderName} </Text>
        <View style={styles.slider}>
            <View style={[styles.contentView]}>
                <Slider
                value={sliderValue}
                onSlidingComplete={setValue}
                maximumValue={maxValue}
                minimumValue={minValue}
                step={1}
                allowTouchTrack
                minimumTrackTintColor='#6200EE'
                maximumTrackTintColor='#BB86FC61'
                trackStyle={{ height: 5, backgroundColor: 'transparent', borderRadius: 5 }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                thumbProps={{
                children: (
                    <Icon
                        name="adjust"
                        type="font-awesome"
                        size={20}
                        reverse
                        containerStyle={{ bottom: 20, right: 20 }}
                        color={'#6200EE'}
                        tvParallaxProperties
                    />
                ),
                }}
                />
            </View>
            <View style={styles.chip}><Chip label={`${sliderValue}`}/></View>
        </View>
        <Divider />
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