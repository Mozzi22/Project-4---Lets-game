// export type TInitialUserGame = {
//     rooms: Array<TRoom>;
//     checker: TChecker;
//     currentChecker: TCurrentChecker | {};
//     ticTacToe: Array<TTicTacToe>;
//     currentRoom: TCurrentRoom | {};
//     steps: TSteps;
//     joinToRoom: string;
// }

// export type TRoom = {
//     creatorLogin: string;
//     gameType: string | null;
//     id: string | null;
// }

// export type TCurrentRoom = {
//     name: string, value: TCurrentRoomValue
// }

// export type TCurrentRoomValue = {
//     room_id: string,
//     room_name: string
// }

// export type TJoinRoom = {
//     guestLogin: string;
//     id: string | null;
// }

// export type TChecker = {
//     desk: Array<TCheckers>;
// }

// export type TCheckers = {
//     position: number;
//     isChecked: boolean | null;
//     color: string | null;
// }

// export type TCurrentChecker = {
//     currentChecker: TCheckers;
// }

// export type TTicTacToe = {
//     position: number;
//     isChecked: boolean | null;
//     figure: string | null;
// }

// export type TSteps = {
//     count: number;
//     isUserStep: null | boolean
// }

import { CHECKER_FIELD__INIT } from 'src/constants/simpleConstants';

export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}
export type TActualRoom = {
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

export type TInitialGame = {
    rooms: TRoom[] | [];
    userLogin: string;
    actualRoom: TActualRoom;
    stepOrder: string;
    stepHistory: TStepInStepHistory[] | [];
    winner: string;
    possibleSteps: [] | any;
    statistics: [];
    isLoading: boolean;
}

export type THistory = Array<typeof CHECKER_FIELD__INIT> | [];
