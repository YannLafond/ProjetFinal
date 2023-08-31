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
            
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {                
                state[itemIndex].quantity += 1;

            } else {                
                state.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    img: action.payload.img,
                    price: action.payload.price,
                    quantity: 1
                });
            }
        },
    },
        deleteBurger(state, action){
        
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                if (state[itemIndex].quantity === 1) {
                    state.splice(itemIndex, 1);
                } else {
                    state[itemIndex].quantity -= 1;
                }
            }
        },
    
});

export const {addBurger, deleteBurger} = burgerSlice.actions

export default burgerSlice.reducer;