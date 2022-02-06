import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import AddItemLink from '../components/AddItemLink';


const HomeScreen: React.FC<propTypes> = (props) => {
    return (
        <ScrollView style={styles.view}>
            <AddItemLink navigate={props.navigation.navigate}/>
        </ScrollView>
    );
}

interface propTypes {
    navigation: any
}

const styles = StyleSheet.create({
    view: {
        
    }
});

export default HomeScreen;