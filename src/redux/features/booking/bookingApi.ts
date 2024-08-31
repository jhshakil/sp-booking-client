import { baseApi } from "@/redux/api/baseApi";
import { RootState, store } from "@/redux/store";

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
    getUserBookings: builder.query({
      query: () => {
        const user = (store.getState() as RootState).auth.user;
        return {
          url: `/bookings/user/${user?.email}`,
          method: "GET",
        };
      },
      providesTags: ["booking"],
    }),
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
    //     url: `/booking/${data._id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["booking"],
    // }),
    deleteBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCheckAvailabilityMutation,
  useCreateBookingMutation,
  useGetUserBookingsQuery,
  useDeleteBookingMutation,
} = bookingApi;
