export type TLoginData = {
    name: string, value: string | null | boolean
}

export type TLoginValue = {
    name: string, value: string | null | boolean
}

export type TInitialLoginData = {
    login: string;
    password: string;
    success: null | boolean;
    isLoading: boolean;
    userLogin: string;
    token: string
}

export type TUserLoginData = {
    userLogin: string,
}

export type TLoginRequest = {
    isLoading: boolean;
}
