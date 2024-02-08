import { configureStore } from "@reduxjs/toolkit";
import { pizzaApi } from "./api/api.pizza";
import { setupListeners } from "@reduxjs/toolkit/query";
import pizzaSlice from "./toolkit/pizza.slice";

export const store = configureStore({
    reducer: {
        [pizzaApi.reducerPath]: pizzaApi.reducer,
        pizza: pizzaSlice // Обновление ключа на pizza
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pizzaApi.middleware)
})

setupListeners(store.dispatch)
