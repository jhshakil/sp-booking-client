import { baseApi } from "@/redux/api/baseApi";
import { RootState, store } from "@/redux/store";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => {
        const user = (store.getState() as RootState).auth.user;
        return {
          url: `/auth/user/${user?.email}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (data) => {
        const user = (store.getState() as RootState).auth.user;
        return {
          url: `/auth/user/${user?.email}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = authApi;
