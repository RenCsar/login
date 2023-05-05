import { configureStore } from '@reduxjs/toolkit';
import authSlice from './usuário/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;