import React from 'react';
import { ScrollView } from 'react-native';

import AddItemForm from '../components/AddItemForm';
import { IAddItem } from '../features/items/types';
import { addItem } from '../features/items/itemsSlice';
import { useAppDispatch } from '../app/hooks';

const AddItemScreen: React.FC<propTypes> = ({ navigation }) => {
    const dispatch = useAppDispatch();

    const ApplyForm: Function = (obj: IAddItem): void => {
        if (!obj.name || !obj.ip) return;
        dispatch(addItem(obj));
        navigation.navigate("Home");
    };
    
    return (
        <ScrollView>
            <AddItemForm submit={ApplyForm} />
        </ScrollView>
    );
}

interface propTypes {
    navigation: any
}

export default AddItemScreen;