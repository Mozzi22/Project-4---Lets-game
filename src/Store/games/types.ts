export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}

export type TInitialUserGame = {
    rooms: TRoom[] | [];
}
