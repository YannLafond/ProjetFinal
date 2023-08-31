import { configureStore } from '@reduxjs/toolkit';
import burgersReducer from './burgersSlice';
import ordersReducer from './order';

const rootReducer = {
    burgers: burgersReducer,
    orders: ordersReducer
};

export const store = configureStore({
    reducer: rootReducer,
    
});

