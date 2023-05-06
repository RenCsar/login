import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAuthState, TUser } from '../../shared/types/types';
import API from '../api/api';

const initialState: TAuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<TUser>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export const login =
    (email: string, password: string) =>
        async (dispatch: any) => {
            try {
                const response = await API.post<TUser>('/auth/login', { email, password });
                dispatch(loginSuccess(response.data));
            } catch (error: any) {
                dispatch(loginFailure(error.message));
                console.log("Erro")
            }
        };

export const register =
    (email: string, password: string) =>
        async (dispatch: any) => {
            try {
                const response = await API.post<TUser>('/auth/register', { email, password });
                dispatch(loginSuccess(response.data));
            } catch (error: any) {
                dispatch(loginFailure(error.message));
            }
        };

export default authSlice.reducer;