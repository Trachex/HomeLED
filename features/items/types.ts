export interface ItemsState {
    items: Array<ItemType>
}

export interface ItemType {
    id: string,
    name: string,
    ip: string,
    delay: number,
    brightness: number,
    mode: number,
    ledCount: number
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
    mode: number,
    ledCount: number
}

export interface IChangeDelayF {
    id: string,
    delay: number
}

export interface IChangeDelay extends IChangeDelayF {
    ip: string
}

export interface IChangeBrightnessF {
    id: string,
    brightness: number
}

export interface IChangeBrightness extends IChangeBrightnessF {
    ip: string
}

export interface IChangeModeF {
    id: string,
    mode: number
}

export interface IChangeMode extends IChangeModeF {
    ip: string
}

export interface IUpdateItem {
    name: string,
    ledCount: number,
    id: string,
    ip: string
}