export type TInitialUserGame = {
    rooms: Array<TRoom>;
    checker: TChecker;
    currentChecker: TCurrentChecker | {};
    ticTacToe: TTicTacToe[];
    currentRoom: TCurrentRoom | {};
    steps: TSteps;
    join: string;
}

export type TRoom = {
    creatorLogin: string;
    gameType: string | null;
    id: string | null;
}

export type TCurrentRoom = {
    name: string, value: TCurrentRoomValue
}

export type TCurrentRoomValue = {
    room_id: string,
    room_name: string
}

export type TJoinRoom = {
    guestLogin: string;
    id: string | null;
}

export type TChecker = {
    desk: TCheckers[];
}

export type TCheckers = {
    position: number;
    isChecked: boolean | null;
    color: string | null;
}

export type TCurrentChecker = {
    currentChecker: TCheckers;
}

export type TTicTacToe = {
    position: number;
    isChecked: boolean | null;
    figure: string | null;
}

export type TSteps = {
    count: number;
    isUserStep: null | boolean
}
