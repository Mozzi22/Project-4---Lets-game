import React, { useEffect } from 'react';
import RoomList from './RoomList';
import RoomContent from './RoomContent';
import { StMain } from './styled';

const Main = ({ initialWebSocket }) => {
    useEffect(() => {
        initialWebSocket();

    }, []);
    return (
        <StMain>
            <RoomList/>
            <RoomContent />
        </StMain>
    )
};

export default Main;
