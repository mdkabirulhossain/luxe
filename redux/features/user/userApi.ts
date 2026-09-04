import { baseApi } from '../../api/baseApi';
import { ApiResponse } from '@/types/api';
import { User, UpdateUserProfilePayload } from '@/types/user';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get logged-in user profile
    getMe: builder.query<ApiResponse<User>, void>({
      query: () => '/users/me',
      providesTags: ['User'],
    }),

    // Update logged-in user profile
    updateProfile: builder.mutation<ApiResponse<User>, UpdateUserProfilePayload>({
      query: (data) => ({
        url: '/users/profile',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetMeQuery, useLazyGetMeQuery, useUpdateProfileMutation } = userApi;
