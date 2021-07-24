import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';

export const support = {
    setSessionStorageItem: (name: string, data: string) => {
        if (typeof data !== 'string') data = JSON.stringify(data);
        localStorage.setItem(name, data);
    },
    killSessionStorageItem: (name: string) => {
        localStorage.removeItem(name);
    },
    getSessionStorageItem: (name: string) => {
        const item = localStorage.getItem(name);
        return item?.charAt(0) === '{' ? JSON.parse(item) : item;
    },
    errorCatcher: ({ body }) => {
        const { body: parsedBody } = JSON.parse(body);
        NotificationManager.error(parsedBody, i18next.t('game_error'), 3000)
    },
    setTokenInCookie: (payload: string, age: number = 3600 * 8) => {
        document.cookie = `token=${payload}; path=/; max-age=${age}`;
    },
    getTokenFromCookie: (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
};
