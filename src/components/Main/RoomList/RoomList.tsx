import React from 'react';
import ControlPanel from './ControlPanel';
import RoomListItems from './RoomListItems';
import { StRoomList, StControlPanel, StItems } from './styled';
// import SearchNoRes from './ControlPanel/SearchNoRes';

const RoomList = ({ rooms = [] }) => {
    // const handleCreateRoom = () => changeModalVisibility({
    //     isOpen: true, data: {}, modalType: 'createChat',
    // });
    return (
        <StRoomList>
            <StControlPanel>
                <ControlPanel />
            </StControlPanel>
            <StItems>
                <RoomListItems/>
                {/* {rooms?.length > 0 ? rooms.map(room => (
                    <RoomListItems
                        key={room.room_id}
                        content={room.room_name}
                        id={room.room_id}
                    />
                )) : < SearchNoRes />} */}
            </StItems>

        </StRoomList>
    );
};
// ChatList.propTypes = {
//     rooms: PropTypes.array,
//     changeModalVisibility: PropTypes.func.isRequired,
// };

export default RoomList;
