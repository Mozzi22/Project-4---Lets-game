export type TModalData = {
    type: TModalType;
    data: {};
    isOpen: boolean;
}
export type TModalType = "createGame";

export type TInitialModalData = {
    createGame: TModalData;
}
