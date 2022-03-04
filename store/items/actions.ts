import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    ItemsState,
    AddItemType,
    UpdateItemType
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

export const UpdateItem: ActionCreator<ThunkAction<Promise<UpdateItemType | void>, ItemsState, void, any>> = 
    (id: string, name: string, ip: string, pixels: number) => {

    return async (dispatch: Dispatch): Promise<UpdateItemType | void> => {

        try {
            // await (await fetch(`${ip}/led/amount`, { method: 'POST', body: JSON.stringify({ pixels }) })).json();

            return dispatch({
                type: 'UPDATE_ITEM',
                payload: {
                    name,
                    ip,
                    pixels,
                    id
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

// export const DeleteItem: ActionCreator<ThunkAction<Promise<UpdateItemType | void>, ItemsState, void, any>> = 
//     (oldName: string, name: string, ip: string, pixels: number) => {

//     return async (dispatch: Dispatch): Promise<UpdateItemType | void> => {

//         try {
//             
//             return dispatch({
//                 type: 'UPDATE_ITEM',
//                 payload: {
//                     name,
//                     ip,
//                     pixels,
//                     oldName
//                 }
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }