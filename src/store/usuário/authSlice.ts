import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { TAuthState, TUser } from '../../shared/types/types';
import API from '../api/api';

const initialState: TAuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
    token: null,
    loading: false 
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
            state.token = null;
            state.loading = false;
            localStorage.removeItem('token');
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            localStorage.setItem('token', action.payload)
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        }
    },
});

export const { loginSuccess, loginFailure, logout, setToken, setLoading } = authSlice.actions;

export const login =
    (email: string, password: string, redirectTo: (path: string) => void) =>
        async (dispatch: any) => {
            try {
                dispatch(setLoading(true))
                const response = await API.post<{ user: TUser, token: string }>('/auth/user', { email, password });
                dispatch(loginSuccess(response.data.user));
                dispatch(setToken(response.data.token))

                redirectTo('/home');
            } catch (error: any) {
                dispatch(loginFailure(error.message));
                dispatch(setLoading(false))
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

export const handleLogout =
    (redirectTo: (path: string) => void) => {
        return (dispatch: Dispatch) => {
            dispatch(logout());
            redirectTo('/')
        }
    }

export default authSlice.reducer;