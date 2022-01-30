import { combineReducers, Reducer } from 'redux';

import { ItemsState } from './items/types';
import ItemsReducer from './items/reducer';

export interface ApplicationState {
    items: ItemsState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    items: ItemsReducer
});