import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000',
    prepareHeaders: (headers, { getState }) => {
      // Extract access token from auth state or cookies
      const state = getState() as { auth?: { accessToken?: string | null } };
      const token = state.auth?.accessToken || Cookies.get('access_token');

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth', 'User'],
  endpoints: () => ({}),
});
