import React from 'react';
import ControlPanel from './ControlPanel';
import RoomListItems from './RoomListItems';
import { StRoomList, StControlPanel, StItems } from './styled';
// import SearchNoRes from './ControlPanel/SearchNoRes';
import { TRoomListItems } from './types';
import { TInitialUserGame, TRoom } from 'src/Store/game/types';

const RoomList  = ({ rooms, userLogin }: TInitialUserGame) => {
    console.log("rooms", rooms, userLogin);
    return (
        <StRoomList>
            <StControlPanel>
                <ControlPanel />
            </StControlPanel>
            <StItems>
                {rooms.map((room: TRoom) => {
                    return (
                        <RoomListItems
                            key={room.id}
                            id={room.id}
                            userLogin={userLogin}
                            gameType={room.gameType}
                            content={room.name}
                        />
                    );
            })}
            </StItems>
        </StRoomList>
    );
};

export default RoomList;
