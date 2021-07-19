import { EnumType } from "typescript"

export type TRegistrationValue = {
     room_id: string, room_name?: string 
}
export type TRegistrationData = {
    name: string, value: TRegistrationValue
}
export interface IRoomListItems {
    id: string;
    img?: string;
    color?: string;
    content?: string;
    setValue: (arg: TRegistrationData) => void;
    currentRoomName: string;
    rooms: string;
}
export interface IStRoom {
    bgColor?: string;
}