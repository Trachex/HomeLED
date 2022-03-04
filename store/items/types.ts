import { Action } from 'redux';

export interface ItemsState {
    items: Array<ItemType>
}

export interface NewItemType {
    name: string,
    ip: string,
    pixels: number
}

export interface ItemType extends NewItemType {
    id: string
}

export interface AddItemType extends Action {
    type: string,
    payload: NewItemType
}

export interface UpdateItemType extends Action {
    type: string,
    payload: ItemType
}

export interface DeleteItemType extends Action {
    type: string,
    payload: {
        id: string
    }
}

export type AllActions = AddItemType | UpdateItemType | DeleteItemType;