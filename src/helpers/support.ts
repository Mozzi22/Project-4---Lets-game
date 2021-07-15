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
};
