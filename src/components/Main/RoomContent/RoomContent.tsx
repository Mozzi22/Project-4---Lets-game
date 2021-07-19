import React from 'react';
import DisplayGame from './DisplayGame';
import { StRoomContent } from './styled';
import Turn from './Turn';

const RoomContent = () => {
    return (
        <StRoomContent>
            <Turn/>
            <DisplayGame/>
        </StRoomContent>
    );
};

export default RoomContent;
