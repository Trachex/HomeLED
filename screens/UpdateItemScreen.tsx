import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../store/items/actions';
import { ItemType } from '../store/items/types';
import { ApplicationState } from '../store';
import ItemForm from '../components/ItemForm';

const UpdateItemScreen: React.FC<propTypes> = ({ navigation, items, UpdateItem }) => {
    const ApplyUpdate: Function = (obj: ItemType): void => {
        const { name, ip, pixels } = obj;
        if (!name || !ip || !pixels) return;

        UpdateItem(navigation.getParam('name'), name, ip, pixels);
        navigation.navigate("Home");
    };

    // const DeleteItem: Function = (): void => {};

    const currItem = items.find((el: ItemType) => {
        return el.name === navigation.getParam('name');
    });


    return (
        <ScrollView>
            <ItemForm submit={ApplyUpdate} defaultsObj={currItem} />
        </ScrollView>
    );
}

interface propTypes {
    UpdateItem: Function,
    // DeleteItem: Function,
    navigation: any,
    items: Array<ItemType>
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps, actions)(UpdateItemScreen);