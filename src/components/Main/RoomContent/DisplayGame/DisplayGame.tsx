import React from 'react';
import { StDisplayGame } from './styled';
import Checkers from './Сheckers';
import TicTacToe from './TicTacToe';
import Welcome from '../Welcome';
import Turn from '../Turn';

const DisplayGame = ({ gameType }) => {
    switch (gameType) {
        case 'Checkers': return (
            <StDisplayGame>
                <Turn/>
                <Checkers />
            </StDisplayGame>
        );
        case 'Tic-tac-toe': return (
            <StDisplayGame>
                <Turn/>
                <TicTacToe />
            </StDisplayGame>
        );
        default: return (
            <StDisplayGame>
               <Welcome/>
            </StDisplayGame>
        );
    };
}

export default DisplayGame;