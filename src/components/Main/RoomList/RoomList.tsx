import React from 'react';
import ControlPanel from './ControlPanel';
import RoomListItems from './RoomListItems';
import { StRoomList, StControlPanel, StItems } from './styled';
import SearchNoRes from './ControlPanel/SearchNoRes';
import { TRoomListItems } from './types';

const RoomList: React.FC<TRoomListItems> = ({ rooms = [] }) => {
    return (
        <StRoomList>
            <StControlPanel>
                <ControlPanel />
            </StControlPanel>
            <StItems>
                {rooms?.length > 0 ? rooms.map(room => (
                    <RoomListItems
                        key={room.room_id}
                        content={room.room_name}
                        id={room.room_id}
                    />
                )) : < SearchNoRes />}
            </StItems>

        </StRoomList>
    );
};

export default RoomList;
