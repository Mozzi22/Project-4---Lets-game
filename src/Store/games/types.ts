export type TInitialUserGame = {
    rooms: Array<TRoom>;
    checker: TChecker;
    currentChecker: TCurrentChecker | {};
}

export type TRoom = {
    creatorLogin: string;
    gameType: string | null;
    id: string | null;
}

export type TCurrentRoom = {
    name: string, value: string | null | boolean
}

export type TJoinRoom = {
    guestLogin: string;
    id: string | null;
}

export type TChecker = {
    desk: TCheckers;
}

export type TCheckers = {
    position: number;
    isChecked: boolean | null;
    color: string | null;
}

export type TCurrentChecker = {
    currentChecker: TCheckers;
}
