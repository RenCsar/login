export type BtnTypes = {
    value?: string;
    padding: string;
    color?: string;
    width?: string;
    height?: string;
};

export type IUser = {
    email: string;
    password: string;
};

export type TUser = {
    _id: string;
    email: string;
    name: string;
};

export type TAuthState = {
    isAuthenticated: boolean;
    user: TUser | null;
    error: string | null;
    token: string | null;
    loading: boolean
};