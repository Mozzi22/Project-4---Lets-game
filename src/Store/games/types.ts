export type TInitialUserData = {
    rooms: TRoom[] | [];
}

export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}
