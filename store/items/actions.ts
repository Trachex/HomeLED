import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    ItemsState,
    AddItemType
} from './types';

export const AddItem: ActionCreator<ThunkAction<Promise<AddItemType | void>, ItemsState, void, any>> = 
    (name: string, ip: string, pixels: number) => {

    return async (dispatch: Dispatch): Promise<AddItemType | void> => {

        try {
            // await (await fetch(`${ip}/led/amount`, { method: 'POST', body: JSON.stringify({ pixels }) })).json();

            return dispatch({
                type: 'ADD_ITEM',
                payload: {
                    name,
                    ip,
                    pixels
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}