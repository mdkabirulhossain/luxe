import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { User } from '@/types/user';

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const getInitialToken = (key: string): string | null => {
  return Cookies.get(key) || null;
};

const initialState: AuthState = {
  user: null,
  accessToken: getInitialToken('access_token'),
  refreshToken: getInitialToken('refresh_token'),
  isAuthenticated: !!getInitialToken('access_token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: User;
        accessToken: string;
        refreshToken?: string;
      }>
    ) => {
      const { user, accessToken, refreshToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      if (refreshToken) {
        state.refreshToken = refreshToken;
      }
      state.isAuthenticated = true;

      // Store tokens in cookies
      Cookies.set('access_token', accessToken, {
        expires: 7, // 7 days
        sameSite: 'lax',
      });
      if (refreshToken) {
        Cookies.set('refresh_token', refreshToken, {
          expires: 30, // 30 days
          sameSite: 'lax',
        });
      }
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;

      // Remove tokens from cookies
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
    },
  },
});

export const { setCredentials, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
