import { CHECKER_FIELD_INIT } from 'src/constants/componentsСonsts';

export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}
export type TCurrentRoom = {
    gameType: string;
    creatorLogin: string;
    guestLogin: string;
    startTime: number;
    id: string;
    stepDoList: []
}

export type TStepOrder = {
    uuid: string;
    gameType: string;
}

export type TStepInStepHistory = {
    login: string;
    step: string;
    time: Date;
    id: string;
}

export type TCheckers = {
    position: number;
    isChecked: boolean | null;
    color: string | null;
}

export type TCurrentChecker = {
    currentChecker: TCheckers;
}

export type TChecker = {
    desk: Array<TCheckers>;
}

export type TStatistics = {
    statistics: string;
}

export type TTicTacToe = {
    position: number;
    isChecked: boolean | null;
    figure: string | null;
}

export type TInitialUserGame = {
    rooms: Array<TRoom>;
    userLogin: string;
    actualRoom: TCurrentRoom;
    stepOrder: string;
    stepHistory: Array<TStepInStepHistory>;
    winner: string;
    possibleSteps: [];
    statistics: Array<string>;
    isLoading: boolean;
    currentChecker: TCurrentChecker | {};
    ticTacToe: Array<TTicTacToe>;
    checker: TChecker;
}

export type THistory = Array<typeof CHECKER_FIELD_INIT> | [];
