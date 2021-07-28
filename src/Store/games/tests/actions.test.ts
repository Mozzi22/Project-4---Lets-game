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
    describe('actions.setActualRoom  ', () => {
        it('toBe defined', () => {
            expect(actions.setActualRoom).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setActualRoom).toBe('function');
        });
        it('should return value', () => {
            const actualRoom = {
                id: '213821732173t213',
                guestLogin: 'Maxik',
                creatorLogin: 'NeMAxik',
                startTime: Date.now(),
            };
            expect(actions.setActualRoom(actualRoom))
                .toEqual({ type: actionTypes.SET_ACTUAL_ROOM, payload: actualRoom });
        });
    });
    describe('actions.subscribeRoom', () => {
        it('toBe defined', () => {
            expect(actions.subscribeRoom).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.subscribeRoom).toBe('function');
        });
        it('should return value', () => {
            const uuid = 'asdusaytdgsadyhgu213861287362183721';
            expect(actions.subscribeRoom(uuid))
                .toEqual({ type: actionTypes.SUBSCRIBE_ROOM, payload: uuid });
        });
    });
    describe('actions.deleteRoom ', () => {
        it('toBe defined', () => {
            expect(actions.deleteRoom).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.deleteRoom).toBe('function');
        });
        it('should return value', () => {
            expect(actions.deleteRoom())
                .toEqual({ type: actionTypes.DELETE_ROOM });
        });
    });
    describe('actions.cleanOldGame  ', () => {
        it('toBe defined', () => {
            expect(actions.cleanOldGame).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.cleanOldGame).toBe('function');
        });
        it('should return value', () => {
            expect(actions.cleanOldGame())
                .toEqual({ type: actionTypes.CLEAN_OLD_GAME });
        });
    });
    describe('actions.getStepOrder', () => {
        it('toBe defined', () => {
            expect(actions.getStepOrder).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.getStepOrder).toBe('function');
        });
        it('should return value', () => {
            const stepOrderTestPayload = { uuid: '213123213213', gameType: 'Chekers' };
            expect(actions.getStepOrder(stepOrderTestPayload))
                .toEqual({ type: actionTypes.GET_STEP_ORDER, payload: stepOrderTestPayload });
        });
    });
    describe('actions.setStepOrder ', () => {
        it('toBe defined', () => {
            expect(actions.setStepOrder).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setStepOrder).toBe('function');
        });
        it('should return value', () => {
            const stepOrder = 'YOU';
            expect(actions.setStepOrder(stepOrder))
                .toEqual({ type: actionTypes.SET_STEP_ORDER, payload: stepOrder });
        });
    });
    describe('actions.doTicStep ', () => {
        it('toBe defined', () => {
            expect(actions.setStepOrder).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.doTicStep).toBe('function');
        });
        it('should return value', () => {
            const step = '7';
            expect(actions.doTicStep(step))
                .toEqual({ type: actionTypes.DO_TIC_STEP, payload: step });
        });
    });
    describe('actions.setStepHistory ', () => {
        it('toBe defined', () => {
            expect(actions.setStepHistory).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setStepHistory).toBe('function');
        });
        it('should return value', () => {
            const stepHistory = [];
            expect(actions.setStepHistory(stepHistory))
                .toEqual({ type: actionTypes.SET_STEP_HISTORY, payload: stepHistory });
        });
    });
    describe('actions.setWinner ', () => {
        it('toBe defined', () => {
            expect(actions.setWinner).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setWinner).toBe('function');
        });
        it('should return value', () => {
            const winner = 'ME';
            expect(actions.setWinner(winner))
                .toEqual({ type: actionTypes.SET_WINNER, payload: winner });
        });
    });

});
