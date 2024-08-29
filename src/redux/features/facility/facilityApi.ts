import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: (data) => {
        const params = new URLSearchParams();

        if (data) {
          if (data.searchTerm) {
            params.append("searchTerm", data.searchTerm);
          }
          if (data.category) {
            params.append("category", data.category);
          }
          if (data.sort) {
            params.append("sort", data.sort);
          }
          if (data.limit) {
            params.append("limit", data.limit);
          }
        }

        return {
          url: "/facility",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["facility"],
    }),
    // getProduct: builder.query({
    //   query: (data) => ({
    //     url: `/product/${data._id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["product"],
    // }),
    createFacility: builder.mutation({
      query: (data) => ({
        url: "/facility",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["facility"],
    }),
    // updateProduct: builder.mutation({
    //   query: (data) => ({
    //     url: `/product/${data._id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["product"],
    // }),
    // deleteProduct: builder.mutation({
    //   query: (data) => ({
    //     url: `/product/${data._id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["product"],
    // }),
  }),
});

export const { useCreateFacilityMutation, useGetFacilitiesQuery } = productApi;
