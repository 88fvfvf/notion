import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortedPizza: [],
    page: 1
}

const PizzaCategories = createSlice({
    name: 'PizzaCategories',
    initialState,
    reducers: {
        setSortedPizza: (state, action) => {
            state.sortedPizza = action.payload;
        },
        setSortedPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const { setSortedPizza, setSortedPage } = PizzaCategories.actions
export default PizzaCategories.reducer