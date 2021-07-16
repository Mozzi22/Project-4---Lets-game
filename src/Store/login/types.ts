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
}
