export type TInitialUserData = {
    rooms: TRoom[] | [];
    checker: TChecker;
    currentChecker: {};
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
    isChecked: boolean;
    color: string;
}