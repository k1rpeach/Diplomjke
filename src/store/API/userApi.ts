import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { IRecommendationsResponse } from "./types";

export const recommendationsApi = createApi({
  reducerPath: "recommendationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
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
    getProperties: builder.query<any, string>({
      query: () => "/chart/songs/",
    }),
  }),
});

export const { useGetPropertiesQuery } = recommendationsApi;
