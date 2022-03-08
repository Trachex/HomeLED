import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../store/items/actions';
import { ApplicationState } from '../store';
import { ItemType } from '../store/items/types';
import Slider from '../components/Slider';
import ModeSelect from '../components/ModeSelect';

const ItemScreen: React.FC<propTypes> = ({ navigation, items, UpdateDelay, UpdateBrightness, ChangeMode }) => {
    const currItem = items.find((el: ItemType) => {
        return el.id === navigation.getParam('id');
    });

    const onDelay = (num: number) => {
        UpdateDelay(currItem?.id, num, currItem?.ip);
    };

    const onBrightness = (num: number) => {
        UpdateBrightness(currItem?.id, num, currItem?.ip);
    };

    const onMode = (num: number) => {
        ChangeMode(currItem?.id, num, currItem?.ip);
    };

    return (
        <ScrollView>
            <Text style={styles.title} >{currItem?.name || 'Unfound item screen'}</Text>
            <Slider sliderName={'Delay'} minValue={1} maxValue={60} onChange={onDelay} sliderValue={currItem?.delay || 1} />
            <Slider sliderName={'Brightness'} minValue={1} maxValue={100} onChange={onBrightness} sliderValue={currItem?.brightness || 100} />
            <ModeSelect selected={currItem?.mode || 0} onChange={onMode} />
        </ScrollView>
    );
}

interface propTypes {
    navigation: any,
    items: Array<ItemType>,
    UpdateDelay: Function,
    UpdateBrightness: Function,
    ChangeMode: Function
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: 'center'
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps, actions)(ItemScreen);