import { api } from "./apiSlice";

export const cryptoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCryptoTrendData: builder.query({
      query: () => "https://api.coingecko.com/api/v3/search/trending",
    }),
    getCryptoData: builder.query({
      query: () =>
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en",
    }),
    getCryptoGlobalData: builder.query({
      query: () => "https://api.coingecko.com/api/v3/global",
    }),
    getCryptoIdData: builder.query({
      query: (id) =>
        `https://api.coingecko.com/api/v3/coins/${id}?localization=fase&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`,
    }),
    getCryptoIdGraphData: builder.query({
      query: (id) =>
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily&precision=10`,
    }),
  }),
});

export const {
  useGetCryptoDataQuery,
  useGetCryptoTrendDataQuery,
  useGetCryptoGlobalDataQuery,
  useGetCryptoIdDataQuery,
  useGetCryptoIdGraphDataQuery,
} = cryptoApi;
