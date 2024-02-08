import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pizzasApi } from "./api/pizzasApi";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [pizzasApi.reducerPath]: pizzasApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware, pizzasApi.middleware)
})

setupListeners(store.dispatch)