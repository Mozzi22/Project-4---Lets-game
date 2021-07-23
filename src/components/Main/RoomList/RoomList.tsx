import React from 'react';
import ControlPanel from './ControlPanel';
import RoomListItems from './RoomListItems';
import { StRoomList, StControlPanel, StItems } from './styled';
// import SearchNoRes from './ControlPanel/SearchNoRes';
import { TInitialUserGame, TRoom } from 'src/Store/game/types';

const RoomList  = ({ rooms }: TInitialUserGame) => {
    console.log("rooms", rooms);
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
                            gameType={room.gameType}
                            content={room.name}
                            creatorLogin={room.creatorLogin}
                        />
                    );
            })}
            </StItems>
        </StRoomList>
    );
};

export default RoomList;
