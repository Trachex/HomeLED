import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ItemPosition from './ItemPosition';
import { ApplicationState } from '../../store';
import { ItemType } from '../../store/items/types';

const ItemList: React.FC<propTypes> = ({ navigate, items }) => {
    const list = items.map((el: ItemType) => {
        return <ItemPosition key={el.name} navigate={navigate} name={el.name} />
    });

    return (
        <View>
            { list.length ? list : <Text>Press + to add new item</Text>}
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

// style