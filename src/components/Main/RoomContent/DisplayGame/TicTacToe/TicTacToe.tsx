import React from 'react';
import { StTicTacToe } from './styled';
import SingleSellNine from './SingleSellNine';

const TicTacToe = () => {
    const items = [];
    for (let i = 8; i > -1; i--) {
        items.push(i);
    }
    return (
        <StTicTacToe>
            {items.map(item => <SingleSellNine id={item} key={item}/>,
            )}
        </StTicTacToe>
    );
};

export default TicTacToe;
