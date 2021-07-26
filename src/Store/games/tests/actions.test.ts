import * as actions from '../actions';
import { actionTypes } from '../actionTypes';

describe('game actions', () => {
    describe('actions.initialWebSocket', () => {
        it('toBe defined', () => {
            expect(actions.initialWebSocket).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.initialWebSocket).toBe('function');
        });
        it('should return value', () => {
            expect(actions.initialWebSocket())
            .toEqual({ type: actionTypes.INITIAL_WEB_SOCKET });
        });
    });
    describe('actions.setAllRooms', () => {
        it('toBe defined', () => {
            expect(actions.setAllRooms).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setAllRooms).toBe('function');
        });
        it('should return value', () => {
            expect(actions.setAllRooms())
                .toEqual({ type: actionTypes.SET_ALL_ROOMS });
        });
    });
    describe('actions.createRoom', () => {
        it('toBe defined', () => {
            expect(actions.createRoom).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.createRoom).toBe('function');
        });
        it('should return value', () => {
            expect(actions.createRoom())
                .toEqual({ type: actionTypes.CREATE_ROOM });
        });
    });
    describe('actions.joinRoom', () => {
        it('toBe defined', () => {
            expect(actions.joinRoom).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.joinRoom).toBe('function');
        });
        it('should return value', () => {
            expect(actions.joinRoom())
                .toEqual({ type: actionTypes.JOIN_ROOM });
        });
    });
    describe('actions.playWithBot', () => {
        it('toBe defined', () => {
            expect(actions.playWithBot).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.playWithBot).toBe('function');
        });
        it('should return value', () => {
            expect(actions.playWithBot())
                .toEqual({ type: actionTypes.PLAY_WITH_BOT });
        });
    });
    describe('actions.do_step', () => {
        it('toBe defined', () => {
            expect(actions.do_step).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.do_step).toBe('function');
        });
        it('should return value', () => {
            expect(actions.do_step())
                .toEqual({ type: actionTypes.DO_STEP });
        });
    });
    describe('actions.setCurrentChecker', () => {
        it('toBe defined', () => {
            expect(actions.setCurrentChecker).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setCurrentChecker).toBe('function');
        });
        it('should return value', () => {
            expect(actions.setCurrentChecker())
                .toEqual({ type: actionTypes.SET_CURRENT_CHECKER });
        });
    });
    describe('actions.setCheckerDesk', () => {
        it('toBe defined', () => {
            expect(actions.setCheckerDesk).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setCheckerDesk).toBe('function');
        });
        it('should return value', () => {
            expect(actions.setCheckerDesk())
                .toEqual({ type: actionTypes.SET_CHECKER_DESK });
        });
    });
    describe('actions.setCurrentRoom', () => {
        it('toBe defined', () => {
            expect(actions.setCurrentRoom).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setCurrentRoom).toBe('function');
        });
        it('should return value', () => {
            expect(actions.setCurrentRoom())
                .toEqual({ type: actionTypes.SET_CURRENT_ROOM });
        });
    });
});
