import React from 'react';
import RoomList from './RoomList';
import RoomContent from './RoomContent';
import { StMain } from './styled';

const Main = () => {
    return (
        <StMain>
            <RoomList/> 
            <RoomContent/>
        </StMain>
    );
};

export default Main;
