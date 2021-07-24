export type TInitialUserData = {
    rooms: TRoom[] | [];
    checker: TChecker;
    currentChecker: TCurrentChecker | {};
}

export type TRoom = {
    creatorLogin: string;
    gameType: string | null;
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

export type TInitialUserGame = {
    rooms: TRoom[] | [];
}
