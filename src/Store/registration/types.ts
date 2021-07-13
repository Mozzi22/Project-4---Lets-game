export type TRegistrationData = {
    name: string, value: string | null 
}

export type TInitialRegistrationData = {
    email: string;
    password: string;
    confirm: string;
    success: null | boolean;
    isLoading: boolean;
    error: null | boolean;
}