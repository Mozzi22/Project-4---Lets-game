export type TInitialUserData = {
    userLogin: string
    rooms: TRoom[] | [];
}

export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}
