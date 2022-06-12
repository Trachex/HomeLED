import React from 'react';
import { View, Text } from 'react-native';

import ItemPosition from './ItemPosition';
import { useAppSelector } from '../../app/hooks';
import { ItemType } from '../../features/items/types';
import styles from './styles';
import NoItems from './NoItems';

const ItemList: React.FC<propTypes> = ({ navigate }) => {
    const items = useAppSelector((state) => state.items.items);

    const list = items.map((el: ItemType) => {
        return <ItemPosition key={el.id} navigate={navigate} id={el.id} name={el.name} />
    });

    return (
        <View style={styles.view}>
            { list.length ? list : <NoItems />}
        </View>
    );
};

interface propTypes {
    navigate: any
};

export default ItemList;