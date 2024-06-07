import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '5a62672e34msh2eab5647350cad7p1f2eb7jsn820abfe760cd');
            headers.set('X-RapidAPI-Host', 
                'article-extractor-and-summarizer.p.rapidapi.com'
            );

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 
                `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;