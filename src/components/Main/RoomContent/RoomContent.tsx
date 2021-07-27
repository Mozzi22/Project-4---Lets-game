import React from 'react';
import DisplayGame from './DisplayGame';
import EndGame from './EndGame';
import { StRoomContent } from './styled';
// import Turn from './Turn';

const RoomContent = ({winner, cleanOldGame}) => {
    if (winner) setTimeout(() => cleanOldGame());
    return (
        <StRoomContent>
            {winner ? <EndGame winner={winner}/> : <DisplayGame />}
        </StRoomContent>
    );
};

export default RoomContent;
