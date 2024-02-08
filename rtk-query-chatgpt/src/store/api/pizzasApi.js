import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pizzasApi = createApi({
    reducerPath: 'pizzasApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://657b478b394ca9e4af141a1b.mockapi.io/pizza/' }),
    endpoints: (builder) => ({
        fetchPizza: builder.query({
            query: (page, limit = 2) => ({
                url: 'pizza',
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
        })
    })
});

export const { useFetchPizzaQuery, useFetchCategoriesQuery} = pizzasApi