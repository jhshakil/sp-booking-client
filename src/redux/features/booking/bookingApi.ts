import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getFacilities: builder.query({
    //   query: (data) => {
    //     const params = new URLSearchParams();
    //     if (data) {
    //       if (data.searchTerm) {
    //         params.append("searchTerm", data.searchTerm);
    //       }
    //       if (data.getterThan) {
    //         params.append("getterThan", data.getterThan);
    //       }
    //       if (data.lessThan) {
    //         params.append("lessThan", data.lessThan);
    //       }
    //       if (data.sort) {
    //         params.append("sort", data.sort);
    //       }
    //       if (data.limit) {
    //         params.append("limit", data.limit);
    //       }
    //     }
    //     return {
    //       url: "/facility",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   providesTags: ["facility"],
    // }),
    // getProduct: builder.query({
    //   query: (data) => ({
    //     url: `/product/${data._id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["product"],
    // }),
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    checkAvailability: builder.mutation({
      query: (data) => ({
        url: "/check-availability",
        method: "POST",
        body: data,
      }),
    }),
    // updateFacility: builder.mutation({
    //   query: (data) => ({
    //     url: `/facility/${data._id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["facility"],
    // }),
    // deleteFacility: builder.mutation({
    //   query: (data) => ({
    //     url: `/facility/${data._id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["facility"],
    // }),
  }),
});

export const { useCheckAvailabilityMutation, useCreateBookingMutation } =
  bookingApi;
