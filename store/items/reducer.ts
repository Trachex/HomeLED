import { Reducer } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { ItemsState, AllActions } from './types';

export const initialState: ItemsState = {
    items: []
};

const reducer: Reducer<ItemsState, AllActions> = (state: ItemsState = initialState, action: AllActions): any => {
    switch (action.type) {
        case 'ADD_ITEM':
            const items = state.items.slice(0);
            const newItem: any = Object.assign({ id: uuidv4() }, action.payload)
            items.push(newItem);
            return { ...state, items };
        break;
        case 'UPDATE_ITEM':
            const updItems = state.items.slice(0);
            const tmp: any = action.payload;
            const updIndex = updItems.findIndex((el) => { return el.id === tmp.id });

            updItems[updIndex].ip = tmp.ip;
            updItems[updIndex].name = tmp.name;
            updItems[updIndex].pixels = tmp.pixels;
            return { ...state, items: updItems };
        break;

        default:
            return state;
    }
};

export default reducer;