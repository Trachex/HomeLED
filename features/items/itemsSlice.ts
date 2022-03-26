import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import {
    ItemsState,
    IAddItemF,
    IAddItem,
    IChangeDelayF,
    IChangeDelay,
    IChangeBrightnessF,
    IChangeBrightness,
    IChangeModeF,
    IChangeMode,
    IUpdateItem
} from './types';

const initialState: ItemsState = {
    items: []
}

export const addItem = createAsyncThunk<IAddItemF, IAddItem>('api', async ({ name, ip }) => {
    const response = await (await fetch(`${ip}/led/state`, { method: 'GET' })).json();
    return { ...response, name, ip };
});

export const changeDelay = createAsyncThunk<IChangeDelayF, IChangeDelay>('api', async ({ id, delay, ip }) => {
    await fetch(`${ip}/led/delay`, { method: 'POST', body: JSON.stringify({ delay }) });
    return { id, delay };
});

export const changeBrightness = createAsyncThunk<IChangeBrightnessF, IChangeBrightness>('api', async ({ id, brightness, ip }) => {
    await fetch(`${ip}/led/brightness`, { method: 'POST', body: JSON.stringify({ brightness }) });
    return { id, brightness } ;
});

export const changeMode = createAsyncThunk<IChangeModeF, IChangeMode>('api', async ({ id, mode, ip }) => {
    await fetch(`${ip}/led/mode`, { method: 'POST', body: JSON.stringify({ mode }) });
    return { id, mode } ;
});

export const updateItem = createAsyncThunk<IUpdateItem, IUpdateItem>('api', async ({ id, ip, name, ledCount }) => {
    await fetch(`${ip}/led/amount`, { method: 'POST', body: JSON.stringify({ amount: ledCount }) });
    return { id, ledCount, name, ip };
});

const counterSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        deleteItem(state: ItemsState, action: PayloadAction<string>) {
            const i = state.items.findIndex(el => { return el.id === action.payload });
            state.items.splice(i, 1);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addItem.fulfilled, (state: ItemsState, action: PayloadAction<IAddItemF>) => {
                state.items.push(Object.assign({ id: uuidv4() }, action.payload));
            })
            .addCase(changeDelay.fulfilled, (state: ItemsState, action: PayloadAction<IChangeDelayF>) => {
                const i = state.items.findIndex(el => { return el.id === action.payload.id });
                state.items[i].delay = action.payload.delay;
            })
            .addCase(changeBrightness.fulfilled, (state: ItemsState, action: PayloadAction<IChangeBrightnessF>) => {
                const i = state.items.findIndex(el => { return el.id === action.payload.id });
                state.items[i].brightness = action.payload.brightness;
            })
            .addCase(changeMode.fulfilled, (state: ItemsState, action: PayloadAction<IChangeModeF>) => {
                const i = state.items.findIndex(el => { return el.id === action.payload.id });
                state.items[i].mode = action.payload.mode;
            })
            .addCase(updateItem.fulfilled, (state: ItemsState, action: PayloadAction<IUpdateItem>) => {
                const i = state.items.findIndex(el => { return el.id === action.payload.id });
                state.items[i].ip = action.payload.ip;
                state.items[i].name = action.payload.name;
                state.items[i].ledCount = action.payload.ledCount;
            })
    }
});

export const { deleteItem } = counterSlice.actions;
export default counterSlice.reducer;