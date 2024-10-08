import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApiPublic = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
