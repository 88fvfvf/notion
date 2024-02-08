import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://657b478b394ca9e4af141a1b.mockapi.io/pizza/' }),
    endpoints: (builder) => ({
        fetchPizza: builder.query({
            query: (page=1, limit = 8) => ({
                url: '/pizza',
                params: {
                    page: page,
                    limit
                }
            })
        }),
        fetchCategories: builder.query({
            query: () => ({
                url: '/categories'
            })
        }),
        fetchSortedPizza: builder.query({
            query: (filter,page=1, limit = 8) => ({
                url: '/pizza',
                params: {
                    page,
                    limit,
                    filter
                }
            })
        })
    })
})

export const { useFetchCategoriesQuery, useFetchPizzaQuery, useFetchSortedPizzaQuery } = pizzaApi