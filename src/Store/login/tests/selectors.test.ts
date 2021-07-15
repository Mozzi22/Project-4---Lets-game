import * as selectors from '../selectors';

describe('login selectors', () => {
  let state;
  beforeEach(() => {
    state = {
      login: {
        login: '',
        password: '',
        success: '',
        isLoading: '',
      },
    };
  });
  describe('selectors.loginStore', () => {
 it('returns the user\'s name', () => {
   expect(selectors.loginStore({
        login: 'Mary',
        password: 'mary1',
        success: true,
        isLoading: true,
   })).toEqual({ login: 'Mary', password: 'mary1', success: true, isLoading: true });
  });
    it('toBe defined', () => {
      expect(selectors.loginStore).toBeDefined();
    });
    it('toBe function', () => {
      expect(typeof selectors.loginStore).toBe('function');
    });
    it('should return value', () => {
      expect(selectors.loginStore(state)).toEqual(state.login);
    });
  });
});
