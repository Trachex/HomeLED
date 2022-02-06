import React from 'react';
import { ScrollView } from 'react-native';
import ItemForm from '../components/ItemForm';

const AddItemScreen: React.FC<{}> = () => {
    return (
        <ScrollView>
            <ItemForm />
        </ScrollView>
    );
}

export default AddItemScreen;