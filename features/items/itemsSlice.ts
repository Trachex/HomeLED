import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import {
    ItemsState,
    IAddItemF,
    IAddItem
} from './types';

const initialState: ItemsState = {
    items: []
}

export const addItem = createAsyncThunk<IAddItemF, IAddItem>('api', async ({ name, ip }) => {
    const response = await (await fetch(`${ip}/led/state`, { method: 'GET' })).json();
    return {...response, name, ip};
})

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
    }
});

export const { deleteItem } = counterSlice.actions;
export default counterSlice.reducer;