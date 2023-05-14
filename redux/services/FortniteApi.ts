import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Battlepass } from '../types/Battlepass';
import { Achievement } from '../types/Achivemen';
import { Crew } from '../types/Crew';
import { Fish } from '../types/Fish';
import { ModesType } from '../types/Modes';
import { NewsType } from '../types/News';
import { Shop } from '../types/Shop';
import { Twitch } from '../types/Twitch';
import { WeaponsType } from '../types/Weapons';
import { UserName } from '../types/UserName';
import { Details } from '../types/Details';
import { AccountID } from '../types/AccountID';

export const fortniteApi = createApi({
  reducerPath: 'fortniteApi',
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_FORTNITE_LINK,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `${process.env.NEXT_PUBLIC_FORTNITE_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAccountId: builder.query<UserName, (string | string[] | undefined)[]>({
      query: (params) => {
        const [id, language] = params;
        return `v1/stats?account=${id}&lang=${language}`;
      },
    }),
    getAchievements: builder.query<Achievement, string | undefined>({
      query: (language) => `/v1/achievements?lang=${language}`,
    }),
    getAllShop: builder.query<Shop, string | undefined>({
      query: (language) => `/v2/shop?lang=${language}`,
    }),
    getBattlepass: builder.query<Battlepass, string | undefined>({
      query: (language) => `v2/battlepass?lang=${language}&season=current`,
    }),
    getCrew: builder.query<Crew, string | undefined>({
      query: (language) => `v2/crew/history?lang=${language}`,
    }),
    getDetailsShop: builder.query<Details, (string | string[] | undefined)[]>({
      query: (params) => {
        const [id, language] = params;
        return `/v2/items/get?id=${id}&lang=${language}`;
      },
    }),
    getFish: builder.query<Fish, string | undefined>({
      query: (language) => `/v1/loot/fish?lang=${language}`,
    }),
    getModes: builder.query<ModesType, string | undefined>({
      query: (language) => `v1/game/modes?lang=${language}`,
    }),
    getNews: builder.query<NewsType, string | undefined>({
      query: (language) => `v1/news?lang=${language}&type=br`,
    }),
    getTwitch: builder.query<Twitch, null>({
      query: () => 'v1/twitch/drops',
    }),
    getUserName: builder.query<AccountID, (string | string[] | undefined)[]>({
      query: (params) => {
        const [username, language] = params;
        return `/v1/lookup?username=${username}&lang=${language}`;
      },
    }),
    getWeapons: builder.query<WeaponsType, string | undefined>({
      query: (language) => `/v1/loot/list?lang=${language}`,
    }),
  }),
});

export const {
  useGetAccountIdQuery,
  useGetAchievementsQuery,
  useGetAllShopQuery,
  useGetBattlepassQuery,
  useGetDetailsShopQuery,
  useGetCrewQuery,
  useGetFishQuery,
  useGetModesQuery,
  useGetNewsQuery,
  useGetTwitchQuery,
  useGetUserNameQuery,
  useGetWeaponsQuery,
} = fortniteApi;
