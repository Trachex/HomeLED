import { Action } from 'redux';

export interface ItemsState {
    items: Array<ItemType>
}

export interface ItemType {
    name: string,
    ip: string,
    pixels: number
}

export interface AddItemType extends Action {
    type: string,
    payload: ItemType
}

export type AllActions = AddItemType;