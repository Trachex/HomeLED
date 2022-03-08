import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    ItemsState,
    AddItemType,
    UpdateItemType,
    DeleteItemType,
    UpdateDelayType,
    UpdateBrightnessType,
    ChangeModeType
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

export const DeleteItem: ActionCreator<ThunkAction<Promise<DeleteItemType | void>, ItemsState, void, any>> = 
    (id: string) => {
    return async (dispatch: Dispatch): Promise<DeleteItemType | void> => {
            return dispatch({
                type: 'DELETE_ITEM',
                payload: {
                    id
                }
            });
    }
}

export const UpdateDelay: ActionCreator<ThunkAction<Promise<UpdateDelayType | void>, ItemsState, void, any>> = 
    (id: string, delay: number, ip: string) => {
    return async (dispatch: Dispatch): Promise<UpdateDelayType | void> => {

        try {
            // await (await fetch(`${ip}/led/delay`, { method: 'POST', body: JSON.stringify({ delay }) })).json();

            return dispatch({
                type: 'UPDATE_DELAY',
                payload: {
                    id,
                    delay
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const UpdateBrightness: ActionCreator<ThunkAction<Promise<UpdateBrightnessType | void>, ItemsState, void, any>> = 
    (id: string, brightness: number, ip: string) => {
    return async (dispatch: Dispatch): Promise<UpdateBrightnessType | void> => {

        try {
            // await (await fetch(`${ip}/led/brightness`, { method: 'POST', body: JSON.stringify({ brightness }) })).json();

            return dispatch({
                type: 'UPDATE_BRIGHTNESS',
                payload: {
                    id,
                    brightness
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export const ChangeMode: ActionCreator<ThunkAction<Promise<ChangeModeType | void>, ItemsState, void, any>> = 
    (id: string, mode: number, ip: string) => {
    return async (dispatch: Dispatch): Promise<ChangeModeType | void> => {

        try {
            // await (await fetch(`${ip}/led/mode`, { method: 'POST', body: JSON.stringify({ mode }) })).json();

            return dispatch({
                type: 'CHANGE_MODE',
                payload: {
                    id,
                    mode
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}