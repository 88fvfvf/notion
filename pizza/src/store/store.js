import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pizzaApi } from "./api/api.pizza";
import OrderSlice from "./toolkit/order/Order.slice";
import SortSlice from "./toolkit/sort/Sort.Slice";
import pizzaSlice from "./toolkit/order/pizza.slice";
import typesSizesSlice from "./toolkit/typesSizes/typesSizes.slice";


export const store = configureStore({
    reducer: {
        [pizzaApi.reducerPath]: pizzaApi.reducer,
        OrderSlice: OrderSlice,
        SortSlice: SortSlice,
        pizzaSlice: pizzaSlice,
        typesSizesSlice: typesSizesSlice
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pizzaApi.middleware)
})

setupListeners(store.dispatch)
