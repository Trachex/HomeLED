import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../store/items/actions';
import { NewItemType } from '../store/items/types';
import ItemForm from '../components/ItemForm';

const AddItemScreen: React.FC<propTypes> = ({ AddItem, navigation }) => {
    const ApplyForm: Function = (obj: NewItemType): void => {
        const { name, ip, pixels } = obj;
        if (!name || !ip || !pixels) return;

        AddItem(name, ip, pixels);
        navigation.navigate("Home");
    };
    
    return (
        <ScrollView>
            <ItemForm submit={ApplyForm} />
        </ScrollView>
    );
}

interface propTypes {
    AddItem: Function,
    navigation: any
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, actions)(AddItemScreen);