export type BtnTypes = {
    value?: string;
    padding: string;
    color?: string;
    width?: string;
    height?: string;
};

export type IUser = {
    email: string;
    senha: string;
};

export type TUser = {
    id: string;
    email: string;
    name: string;
};

export type TAuthState = {
    isAuthenticated: boolean;
    user: TUser | null;
    error: string | null;
};