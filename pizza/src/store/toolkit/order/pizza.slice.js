import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Pizza: [],
    amount: 0
}

const pizzaSlice = createSlice({
    name: 'pizzaSlice',
    initialState,
    reducers: {
        addPizza: (state, action) => {
            // state.Pizza.push(action.payload);
            localStorage.setItem('pizza', JSON.stringify(action.payload))
            state.Pizza.push(JSON.parse(localStorage.getItem('pizza')))
        },
        changeAmount: (state,action) => {
            state.amount = action.payload
        }
    }
})
export const { addPizza,changeAmount } = pizzaSlice.actions
export default pizzaSlice.reducer