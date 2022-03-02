import React from 'react';
import { ScrollView } from 'react-native';
import AddItemLink from '../components/AddItemLink';
import ItemList from '../components/ItemList';

const HomeScreen: React.FC<propTypes> = (props) => {
    return (
        <ScrollView>
            <ItemList navigate={props.navigation.navigate}/>
            <AddItemLink navigate={props.navigation.navigate}/>
        </ScrollView>
    );
}

interface propTypes {
    navigation: any
}

export default HomeScreen;