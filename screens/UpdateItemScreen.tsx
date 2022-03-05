import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../store/items/actions';
import { NewItemType, ItemType } from '../store/items/types';
import { ApplicationState } from '../store';
import ItemForm from '../components/ItemForm';
import DeleteItemIcon from '../components/DeleteItemIcon';

const UpdateItemScreen: React.FC<propTypes> = ({ navigation, items, UpdateItem, DeleteItem }) => {
    const ApplyUpdate: Function = (obj: NewItemType): void => {
        const { name, ip, pixels } = obj;
        if (!name || !ip || !pixels) return;

        UpdateItem(navigation.getParam('id'), name, ip, pixels);
        navigation.navigate("Home");
    };

    const Delete: Function = (): void => {
        DeleteItem(navigation.getParam('id'));
        navigation.navigate("Home");
    };

    const currItem = items.find((el: ItemType) => {
        return el.id === navigation.getParam('id');
    });


    return (
        <ScrollView>
            <DeleteItemIcon deleteFn={Delete}/>
            <ItemForm submit={ApplyUpdate} defaultsObj={currItem} />
        </ScrollView>
    );
}

interface propTypes {
    UpdateItem: Function,
    DeleteItem: Function,
    navigation: any,
    items: Array<ItemType>
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps, actions)(UpdateItemScreen);