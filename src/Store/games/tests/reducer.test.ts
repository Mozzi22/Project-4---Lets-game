import { reducer, initialState } from '../reducer';
import * as actions from '../actions';

describe('gameReducer', () => {
    it('SET_ALL_ROOMS', () => {
        const rooms = [
            { creatorLogin: 'mary', gameType: 'Checkers', id: 1234 }
        ];
        expect(reducer(initialState, actions.setAllRooms(rooms))).toEqual({ ...initialState, rooms });
    });
    it('default', () => expect(reducer(undefined, { type: '' })).toEqual(initialState));
    it('SET_USER_LOGIN', () => {
        const testUserLogin = 'KekShrek';
        expect(reducer(initialState, actions.setUserLogin(testUserLogin)))
            .toEqual({ ...initialState, userLogin: testUserLogin });
    });
    it('SET_WINNER', () => {
        const winner = 'KekShrek';
        expect(reducer(initialState, actions.setWinner(winner)))
            .toEqual({ ...initialState, winner });
    });
    it('SET_ACTUAL_ROOM', () => {
        const actualRoom = {
                id: '213821732173t213',
                guestLogin: 'dcnfcd ',
                creatorLogin: 'dncvfdnncv',
                startTime: Date.now(),
            };
        expect(reducer(initialState, actions.setCurrentRoom(actualRoom)))
            .toEqual({ ...initialState, actualRoom });
    });
    it('SET_STEP_ORDER', () => {
        const stepOrder = 'YOU';
        expect(reducer(initialState, actions.setStepOrder(stepOrder)))
            .toEqual({ ...initialState, stepOrder });
    });
    it('SET_STEP_HISTORY', () => {
        const stepHistory = [
            {
                login: 'ME',
                step: '1',
                time: Date.now(),
                id: '21-3217637217datsyda-dsahdsa',
            },
        ];
        expect(reducer(initialState, actions.setStepHistory(stepHistory)))
            .toEqual({ ...initialState, stepHistory });
    });
});
