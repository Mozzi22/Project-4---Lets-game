import React from 'react';
import ControlPanel from './ControlPanel';
import RoomListItems from './RoomListItems';
import { StRoomList, StControlPanel, StItems } from './styled';
import { TInitialUserGame, TRoom } from 'src/Store/games/types';

const RoomList = ({ rooms, userLogin }: TInitialUserGame) => {
    console.log(rooms)
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
                            content={room.name}
                             creatorLogin={room.creatorLogin}
                        userLogin={userLogin}
                        gameType={room.gameType}
                        />
                    );
            })}
            </StItems>
        </StRoomList>
    );
};

export default RoomList;
