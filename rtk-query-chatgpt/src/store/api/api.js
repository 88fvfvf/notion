import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        fetchData: builder.query({
            query: (limit = 100) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        fetchImage: builder.query({
            query: () => ({
                url: '/pizza'
            })
        }),
        createPosts: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        })
    })
});

export const { useFetchDataQuery, useCreatePostsMutation, useFetchImageQuery } = api;
