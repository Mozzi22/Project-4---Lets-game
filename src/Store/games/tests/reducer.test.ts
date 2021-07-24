import { reducer, initialState } from '../reducer';
import { setAllRooms } from '../actions';

describe('gameReducer', () => {
    it('SET_ALL_ROOMS', () => {
        const rooms = [
            { creatorLogin: 'mary', gameType: 'Checkers', id: 1234 }
        ];
        expect(reducer(initialState, setAllRooms(rooms))).toEqual({ ...initialState, rooms });
    });
    it('default', () => expect(reducer(undefined, { type: '' })).toEqual(initialState));
});
