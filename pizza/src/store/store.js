import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pizzaApi } from "./api/api.pizza";

export const store = configureStore({
    reducer: {
        [pizzaApi.reducerPath]: pizzaApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pizzaApi.middleware)
})

setupListeners(store.dispatch)
