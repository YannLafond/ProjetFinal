import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
    currentOrder: null,
};

const order = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
            state.currentOrder = action.payload;
        },
        clearOrder: (state) => {
            state.currentOrder = null;
        }
    }
});

export const { addOrder, clearOrder } = order.actions;
export default ordersSlice.reducer;