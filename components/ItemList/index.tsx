import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ItemPosition from './ItemPosition';
import { ApplicationState } from '../../store';
import { ItemType } from '../../store/items/types';
import styles from './styles';

const ItemList: React.FC<propTypes> = ({ navigate, items }) => {
    const list = items.map((el: ItemType) => {
        return <ItemPosition key={el.id} navigate={navigate} itemId={el.id} name={el.name} />
    });

    return (
        <View style={styles.view}>
            { list.length ? list : <Text style={styles.text}>Press + to add new item</Text>}
        </View>
    );
};

interface propTypes {
    navigate: any,
    items: Array<ItemType>
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        items: state.items.items
    }
};

export default connect(mapStateToProps)(ItemList);