import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from "uuid";

const initialState = {
    burgers: [],
    cartcount: 0,
}

const burgerSlice = createSlice({
    name: "burgers",
    initialState,
    reducers: {
        addBurger(state, action) {
            state.burgers.push({...action.payload, id: uuidv4()});
        },
        deleteBurger(state, action){
            state.burgers = state.burgers.filter((burger) => burger.id !== action.payload.id);
        },
        updateBurger(state, action){
            state.burgers = state.burgers.map((burger) => burger.id === action.payload.id ? action.payload : burger);
        },
        addToCart(state, action){
            state.cartcount++
        }
    }
});

export const {addBurger, deleteBurger, updateBurger} = burgerSlice.actions

export default burgerSlice.reducer;