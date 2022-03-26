import React from 'react';
import { ScrollView } from 'react-native';

import UpdateItemForm from '../components/UpdateItemForm';
import DeleteItemIcon from '../components/DeleteItemIcon';
import { ItemType, IUpdateItem } from '../features/items/types';
import { updateItem, deleteItem } from '../features/items/itemsSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const UpdateItemScreen: React.FC<propTypes> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.items.items);

    const ApplyUpdate: Function = (obj: IUpdateItem): void => {
        if (!obj.ip || !obj.ledCount || !obj.name) return;

        dispatch(updateItem(obj));
        navigation.navigate("Home");
    };

    const Delete: Function = (): void => {
        dispatch(deleteItem(navigation.getParam('id')));
        navigation.navigate("Home");
    };

    const currItem = items.find((el: ItemType) => {
        return el.id === navigation.getParam('id');
    });


    return (
        <ScrollView>
            <DeleteItemIcon deleteFn={Delete}/>
            <UpdateItemForm submit={ApplyUpdate} defaultsObj={currItem} />
        </ScrollView>
    );
}

interface propTypes {
    navigation: any
};

export default UpdateItemScreen;