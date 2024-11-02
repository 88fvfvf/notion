import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://671bc37d2c842d92c3813953.mockapi.io/' }),
    endpoints: (builder) => ({
        fetchPizza: builder.query({
            query: () => ({
                url: '/pizza',

            })
        }),
        fetchCategories: builder.query({
            query: () => ({
                url: '/categories'
            })
        })
    })
})

export const { useFetchCategoriesQuery, useFetchPizzaQuery } = pizzaApi