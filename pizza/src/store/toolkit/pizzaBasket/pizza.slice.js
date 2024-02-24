import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Pizza: [],
    price: 0,
    amount: 0
}

const pizzaSlice = createSlice({
    name: 'pizzaSlice',
    initialState,
    reducers: {
        addPizza: (state, action) => {
            const pizzaToAdd = action.payload;
            state.Pizza.push(pizzaToAdd);
            state.amount = state.Pizza.length;
        },
        addPrice: (state, action) => {
            state.price += action.payload;
        },
        deleteAllPizza: (state) => {
            state.Pizza = []
            state.price = 0
            state.amount = 0
        },
        deletePizza: (state, action) => {
            const {pizzaOrder,pizzaPrice} = action.payload
            state.Pizza = state.Pizza.filter(d => d.id !== pizzaOrder)
            state.price -= pizzaPrice
            state.amount = state.Pizza.length
        }
    }
});

export const { addPizza, deleteAllPizza, addPrice, deletePizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
