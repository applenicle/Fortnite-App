import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Locale {
  locale: string | undefined;
}

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
    getAccountId: builder.query<any[], Locale[]>({
      query: (params) => {
        const [id, language] = params;
        return `v1/stats?account=${id}&lang=${language}`;
      },
    }),
    getAllShop: builder.query({
      query: (language) => `/v2/shop?lang=${language}`,
    }),
    getBattlepass: builder.query({
      query: (language) => `v2/battlepass?lang=${language}&season=current`,
    }),
    getDetailsShop: builder.query({
      query: (params) => {
        const [id, language] = params;
        return `/v2/items/get?id=${id}&lang=${language}`;
      },
    }),
    getUserName: builder.query({
      query: (params) => {
        const [username, language] = params;
        return `/v1/lookup?username=${username}&lang=${language}`;
      },
    }),
    getMap: builder.query({
      query: () => `/v1/maps/list`,
    }),
    getAchievements: builder.query({
      query: (language) => `/v1/achievements?lang=${language}`,
    }),
    getFish: builder.query({
      query: (language) => `/v1/loot/fish?lang=${language}`,
    }),
    getCrew: builder.query({
      query: (language) => `v2/crew/history?lang=${language}`,
    }),
    getUpcomingItems: builder.query({
      query: (language) => `/v2/items/upcoming?lang=${language}`,
    }),
    getWeapons: builder.query({
      query: (language) => `/v1/loot/list?lang=${language}`,
    }),
    getChallenges: builder.query({
      query: (language) => `/v3/challenges?season=current&lang=${language}`,
    }),
    getTwitch: builder.query({
      query: () => 'v1/twitch/drops',
    }),
    getNews: builder.query({
      query: (language) => `v1/news?lang=${language}&type=br`,
    }),
    getModes: builder.query({
      query: (language) => `v1/game/modes?lang=${language}`,
    }),
  }),
});

export const {
  useGetAccountIdQuery,
  useGetAllShopQuery,
  useGetBattlepassQuery,
  useGetDetailsShopQuery,
  useGetUserNameQuery,
  useGetMapQuery,
  useGetAchievementsQuery,
  useGetUpcomingItemsQuery,
  useGetCrewQuery,
  useGetFishQuery,
  useGetWeaponsQuery,
  useGetChallengesQuery,
  useGetTwitchQuery,
  useGetNewsQuery,
  useGetModesQuery,
} = fortniteApi;
