import { Reducer } from 'redux';

import { ItemsState, AllActions, UpdateItemPayload } from './types';

export const initialState: ItemsState = {
    items: []
};

const reducer: Reducer<ItemsState, AllActions> = (state: ItemsState = initialState, action: AllActions): any => {
    switch (action.type) {
        case 'ADD_ITEM':
            const items = state.items.slice(0);
            items.push(action.payload);
            return { ...state, items };
        break;
        case 'UPDATE_ITEM':
            const updItems = state.items.slice(0);
            const tmp: any = action.payload;
            const updIndex = updItems.findIndex((el) => { return el.name === tmp.oldName });

            updItems[updIndex].ip = action.payload.ip;
            updItems[updIndex].name = action.payload.name;
            updItems[updIndex].pixels = action.payload.pixels;
            return { ...state, items: updItems };
        break;

        default:
            return state;
    }
};

export default reducer;