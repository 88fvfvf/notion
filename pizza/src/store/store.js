import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pizzaApi } from "./api/api.pizza";
import pizzaSlice from "./toolkit/pizzaBasket/pizza.slice";
import SortSlice from "./toolkit/sort/Sort.Slice";


export const store = configureStore({
    reducer: {
        [pizzaApi.reducerPath]: pizzaApi.reducer,
        SortSlice: SortSlice,
        pizzaSlice: pizzaSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pizzaApi.middleware)
})

setupListeners(store.dispatch)
