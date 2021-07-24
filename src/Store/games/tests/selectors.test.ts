import * as selectors from '../selectors';

describe('login selectors', () => {
    let state;
    beforeEach(() => {
        state = {
            game: {
                rooms: '',
            },
        };
    });
    describe('selectors.gameStore', () => {
        it('toBe defined', () => {
            expect(selectors.gameStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.gameStore).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.gameStore(state)).toEqual(state.game);
        });
        it('should return value of selectors getRooms', () => {
            const state = {
                game: {
                    rooms: [{ creatorLogin: 'mary',
                    gameType: 'Checkers',
                    id: 1234
                }],
            },
        };
        expect(selectors.getRooms(state)).toEqual([{ creatorLogin: 'mary',
                    gameType: 'Checkers',
                    id: 1234
                }]);
        });
    });
});
