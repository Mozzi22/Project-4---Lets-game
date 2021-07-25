import React from 'react';
import { StDisplayGame } from './styled';
// import Checkers from './Сheckers';
import TicTacToe from './TicTacToe';

const DisplayGame = () => {
    return (
        <StDisplayGame>
            <TicTacToe/>
            {/* <Checkers /> */}
        </StDisplayGame>
    );
};

export default DisplayGame;
