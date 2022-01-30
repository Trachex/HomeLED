import { Reducer } from 'redux';

import { ItemsState, AllActions } from './types';

export const initialState: ItemsState = {

};

const reducer: Reducer<ItemsState, AllActions> = (state: ItemsState = initialState, action: AllActions): any => {
    switch (action.type) {
        case '':
            
            break;

      default:
        return state;
    }
};

export default reducer;