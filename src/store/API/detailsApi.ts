import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { IDetailsResponse, ILyricsResponse } from "./types";

export const detailsApi = createApi({
  reducerPath: "detailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://genius-song-lyrics1.p.rapidapi.com/song/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "97daaa2a00msh498c4392fa09b1bp123e71jsnfcd6c5852bec"
      );
      headers.set("X-RapidAPI-Host", "genius-song-lyrics1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDetails: builder.query<IDetailsResponse, string>({
      query: (id) => ({
        url: "details",
        params: {
          id,
        },
      }),
    }),
    getLyrics: builder.query<ILyricsResponse, string>({
      query: (id) => ({
        url: "lyrics",
        params: {
          id,
        },
      }),
    }),
  }),
});

export const { useGetDetailsQuery, useGetLyricsQuery } = detailsApi;
