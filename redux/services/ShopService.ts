import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IShop } from '../models/IShop';

export const nameAPI = createApi({
  reducerPath: 'nameAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://fortniteapi.io/v2`,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', `${process.env.NEXT_PUBLIC_FORTNITE_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchAllShop: builder.query<IShop[], string | number>({
      query: (name: string) => ({
        url: `/${name}`,
      }),
    }),
  }),
});
