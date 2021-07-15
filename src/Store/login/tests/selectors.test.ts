import * as selectors from '../selectors';

describe('login selectors', () => {
    let state;
    beforeEach(() => {
        state = {
            login: {
                loginLog: '',
                passwordLog: '',
            },
        };
    });
    describe('selectors.loginStore', () => {
        it('toBe defined', () => {
            expect(selectors.loginStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.loginStore).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.loginStore(state)).toEqual(state.login);
        });
        it('should return valufffe', () => {
          const state = {
            login: {
              login: 'personal',
              password: 'personal1',
          },
        };
            expect(selectors.logValues(state)).toEqual({ login: 'personal', password: 'personal1' });
        });
    });
});
