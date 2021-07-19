export type TModal = {
    isOpen: boolean; 
    data: {}, 
    modalType: string;
}
export interface IControlPanel {
    setValue: () => void; 
    filterByRoomName: () => void; 
    changeModalVisibility: (arg: TModal) => void;
}
