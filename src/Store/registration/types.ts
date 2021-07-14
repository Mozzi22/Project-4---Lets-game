export type TRegistrationData = {
    name: string, value: string | null | boolean 
}

export type TInitialRegistrationData = {
    login: string;
    password: string;
    confirm: string;
    success: null | boolean;
    isLoading: boolean;
    error: null | boolean;
}
