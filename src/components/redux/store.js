import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cart';
import ordersReducer from './redux/order';

const rootReducer = {
    cart: cartReducer,
    orders: ordersReducer
};

const store = configureStore({
    reducer: rootReducer,
    
});

export default store;