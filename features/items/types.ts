export interface ItemsState {
    items: Array<ItemType>
}

export interface ItemType {
    id: string,
    name: string,
    ip: string,
    delay: number,
    brightness: number,
    mode: number
}

export interface IAddItem {
    name: string,
    ip: string
}

export interface IAddItemF {
    name: string,
    ip: string,
    delay: number,
    brightness: number,
    mode: number
}
