import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Pizza: []
}

const pizzaSlice = createSlice({
    name: 'pizzaSlice',
    initialState,
    reducers: {
        addPizza: (state, action) => {
            // state.Pizza.push(action.payload);
            localStorage.setItem('pizza', JSON.stringify(action.payload))
            state.Pizza.push(JSON.parse(localStorage.getItem('pizza')))
        }
    }
})
export const { addPizza } = pizzaSlice.actions
export default pizzaSlice.reducer