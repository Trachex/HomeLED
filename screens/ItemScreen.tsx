import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Surface } from "@react-native-material/core";

import Slider from '../components/Slider';
import ModeSelect from '../components/ModeSelect';
import { ItemType } from '../features/items/types';
import { changeMode, changeDelay, changeBrightness } from '../features/items/itemsSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const ItemScreen: React.FC<propTypes> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.items.items);
    const currItem = items.find((el: ItemType) => {
        return el.id === navigation.getParam('id');
    });

    const onMode = (mode: number) => {
        dispatch(changeMode({
            id: navigation.getParam('id'),
            mode,
            ip: currItem?.ip || ''
        }));
    };

    const onDelay = (delay: number) => {
        dispatch(changeDelay({
            id: navigation.getParam('id'),
            delay,
            ip: currItem?.ip || ''
        }));
    }
    
    const onBrightness = (brightness: number) => {
        dispatch(changeBrightness({
            id: navigation.getParam('id'),
            brightness,
            ip: currItem?.ip || ''
        }));
    }

    return (
        <ScrollView>
            <ModeSelect buttons={['Mono']} selected={currItem?.mode || 0} onChange={onMode} />
            <Surface style={styles.surface} elevation={2}>
                <Slider sliderName={'Delay'} minValue={1} maxValue={60} onChange={onDelay} sliderValue={currItem?.delay || 1} />
                <Slider sliderName={'Brightness'} minValue={1} maxValue={255} onChange={onBrightness} sliderValue={currItem?.brightness || 255} />
            </Surface>
        </ScrollView>
    );
}

interface propTypes {
    navigation: any
};

const styles = StyleSheet.create({
    surface: {
      width: '96%',
      marginHorizontal: Dimensions.get('window').width * 0.02,
    }
});

export default ItemScreen;