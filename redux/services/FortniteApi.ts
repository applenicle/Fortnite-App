import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IShop } from '../models/IShop';

export const fortniteApi = createApi({
  reducerPath: 'fortniteApi',
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `https://fortniteapi.io`,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', `${process.env.NEXT_PUBLIC_FORTNITE_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAccountId: builder.query<any[], any>({
      query: (accountId) => `v1/stats?account=${accountId}&lang=en`,
    }),
    getAllShop: builder.query<IShop[], void>({
      query: () => '/v2/shop?lang=en',
    }),
    getBattlepass: builder.query<any[], any>({
      query: () => `v2/battlepass?lang=en&season=current`,
    }),
    getDetailsShop: builder.query<any[], any>({
      query: (id) => `/v2/items/get?id=${id}&lang=en`,
    }),
    getUserName: builder.query<any[], any>({
      query: (username) => `/v1/lookup?username=${username}&lang=en`,
    }),

  }),
});

export const { 
  useGetAccountIdQuery,
  useGetAllShopQuery, 
  useGetBattlepassQuery,
  useGetDetailsShopQuery, 
  useGetUserNameQuery,
  } = fortniteApi

// export const battlepassAPI = createApi({
//   reducerPath: 'battlepassAPI',
//   baseQuery: fetchBaseQuery({
  
//     baseUrl: `https://fortniteapi.io/v2`,
//     prepareHeaders: (headers, { getState }) => {
//       headers.set('Authorization', `${process.env.NEXT_PUBLIC_FORTNITE_API_KEY}`);
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     fetchAllShop: builder.query<IShop[], string | number>({
//       query: (name: string) => ({
//         url: `/${name}`,
//       }),
//     }),
//   }),
// });


// export const mapAPI = createApi({
//   reducerPath: 'mapAPI',
//   baseQuery: fetchBaseQuery({
//     baseUrl: `https://fortniteapi.io/v2`,
//     prepareHeaders: (headers, { getState }) => {
//       headers.set('Authorization', `${process.env.NEXT_PUBLIC_FORTNITE_API_KEY}`);
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     fetchAllShop: builder.query<IShop[], string | number>({
//       query: (name: string) => ({
//         url: `/${name}`,
//       }),
//     }),
//   }),
// });

