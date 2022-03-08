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
    id: string,
    delay?: number,
    brightness?: number,
    mode?: number
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

export interface UpdateDelayType extends Action {
    type: string,
    payload: {
        id: string,
        delay: number
    }
}

export interface UpdateBrightnessType extends Action {
    type: string,
    payload: {
        id: string,
        brightness: number
    }
}

export interface ChangeModeType extends Action {
    type: string,
    payload: {
        id: string,
        mode: number
    }
}