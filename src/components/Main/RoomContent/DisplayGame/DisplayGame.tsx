import React from 'react';
import { StDisplayGame } from './styled';
import Checkers from './Сheckers';
import TicTacToe from './TicTacToe';

const DisplayGame = ({ currentRoomName }) => {
    switch (currentRoomName.room_name) {
        case 'Checkers': return (
            <StDisplayGame>
                {/* <Turn/> */}
                <Checkers />
            </StDisplayGame>
        );
        case 'Tic-tac-toe': return (
            <StDisplayGame>
                {/* <Turn/> */}
                <TicTacToe />
            </StDisplayGame>
        );
        default: return (
            <StDisplayGame>
                Тут будет компонент приветствия
            </StDisplayGame>
        );
    };
}

export default DisplayGame;