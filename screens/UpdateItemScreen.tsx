import React from 'react';
import { ScrollView, Text } from 'react-native';

const UpdateItemScreen: React.FC<propTypes> = ({ navigation }) => {
    const name = navigation.getParam('name');

    return (
        <ScrollView>
            <Text>{name} Update Item Screen</Text>
        </ScrollView>
    );
}

interface propTypes {
    navigation: any
};


export default UpdateItemScreen;