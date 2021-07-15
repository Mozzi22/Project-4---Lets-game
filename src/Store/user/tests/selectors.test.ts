import * as selectors from '../selectors';

describe('login selectors', () => {
    let state;
    beforeEach(() => {
        state = {
            user: {
                init: '',
                themeMode: '',
            },
        };
    });
    describe('selectors.userStore', () => {
        it('toBe defined', () => {
            expect(selectors.userStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.userStore).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.userStore(state)).toEqual(state.user);
        });
        it('should return value of selectors userInit', () => {
            const state = {
                user: {
                    init: true,
                },
            };
            expect(selectors.userInit(state)).toEqual(true);
        });
        it('should return value of selectors userToken', () => {
            const state = {
                user: {
                    token: 'abc',
                },
            };
            expect(selectors.userToken(state)).toEqual('abc');
        });
        it('should return value of selectors userNotifSettings', () => {
            const state = {
                user: {
                    notifications: true,
                },
            };
            expect(selectors.userNotifSettings(state)).toEqual(true);
        });
        it('should return value of selectors userTheme', () => {
            const state = {
                user: {
                    theme: 'light',
                },
            };
            expect(selectors.userTheme(state)).toEqual('light');
        });
        it('should return value of selectors userInfo', () => {
            const state = {
                user: {
                    userInfo: 'abcas',
                },
            };
            expect(selectors.userInfo(state)).toEqual('abcas');
        });
        it('should return value of selectors userLogin', () => {
            const state = {
                user: {
                    login: 'jimmyyy',
                },
            };
            expect(selectors.userLogin(state)).toEqual('jimmyyy');
        });
        it('should return value of selectors newMessage', () => {
            const state = {
                user: {
                    newMessage: 'abc',
                },
            };
            expect(selectors.newMessage(state)).toEqual('abc');
        });
        it('should return value of selectors userThemeMode', () => {
            const state = {
                user: {
                    themeMode: 'dark',
                },
            };
            expect(selectors.userThemeMode(state)).toEqual('dark');
                });
        it('should return value of selectors changeUser', () => {
            const state = {
                user: {
                    changeUser: 'abc',
                },
            };
            expect(selectors.changeUser(state)).toEqual('abc');
        });
        it('should return value of selectors userId', () => {
            const state = {
                user: {
                    id: 123,
                },
            };
            expect(selectors.userId(state)).toEqual(123);
        });
    });
});
