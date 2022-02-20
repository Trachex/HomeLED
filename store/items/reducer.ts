import { Reducer } from 'redux';

import { ItemsState, AllActions } from './types';

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

      default:
        return state;
    }
};

export default reducer;