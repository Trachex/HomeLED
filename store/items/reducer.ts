import { Reducer } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { ItemsState } from './types';

export const initialState: ItemsState = {
    items: []
};

const reducer: Reducer<ItemsState, any> = (state: ItemsState = initialState, action: any): any => {
    switch (action.type) {
        case 'ADD_ITEM':
            const items = state.items.slice(0);
            items.push(Object.assign({ id: uuidv4() }, action.payload));
            return { ...state, items };
            
        break;
        case 'UPDATE_ITEM':
            const updItems = state.items.slice(0);
            const updIndex = updItems.findIndex((el) => { return el.id === action.payload.id });
    
            updItems[updIndex].ip = action.payload.ip;
            updItems[updIndex].name = action.payload.name;
            updItems[updIndex].pixels = action.payload.pixels;
            return { ...state, items: updItems };

        break;
        case 'DELETE_ITEM':
            const filteredItems = state.items.filter((el) => { el.id !== action.payload.id });
            return { ...state, items: filteredItems };

        break;
        default:
            return state;
    }
};

export default reducer;