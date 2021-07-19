import React from 'react';
import { StTicTacToe } from './styled';
import SingleSellNine from './SingleSellNine';

const TicTacToe = () => {
    const items = [8, 7, 6, 5, 4, 3, 2, 1, 0];
    return (
        <StTicTacToe>
            {items.map(item => <SingleSellNine id={item} key={item}/>)}
        </StTicTacToe>
    );
};

export default TicTacToe;
