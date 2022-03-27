import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

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

    const onDelay = (delay: number) => {
        dispatch(changeDelay({
            id: navigation.getParam('id'),
            delay,
            ip: currItem?.ip || ''
        }));
    };

    const onBrightness = (brightness: number) => {
        dispatch(changeBrightness({
            id: navigation.getParam('id'),
            brightness,
            ip: currItem?.ip || ''
        }));
    };

    const onMode = (mode: number) => {
        dispatch(changeMode({
            id: navigation.getParam('id'),
            mode,
            ip: currItem?.ip || ''
        }));
    };

    const buttons = ['Mono'];

    return (
        <ScrollView>
            <Text style={styles.title} >{currItem?.name || 'Unfound item screen'}</Text>
            <Slider sliderName={'Delay'} minValue={1} maxValue={60} onChange={onDelay} sliderValue={currItem?.delay || 1} />
            <Slider sliderName={'Brightness'} minValue={1} maxValue={100} onChange={onBrightness} sliderValue={currItem?.brightness || 100} />
            <ModeSelect buttons={buttons} selected={currItem?.mode || 0} onChange={onMode} />
        </ScrollView>
    );
}

interface propTypes {
    navigation: any
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: 'center'
    }
});
export default ItemScreen;