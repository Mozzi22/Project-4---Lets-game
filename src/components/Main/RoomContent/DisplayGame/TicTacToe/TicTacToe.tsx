import React from 'react';
import { StTicTacToe } from './styled';
import SingleSellNine from './SingleSellNine';
import { ITEMS_FOR_TIC_TAC_TOE } from 'src/constants/ui';

const TicTacToe = () => {
    const items = ITEMS_FOR_TIC_TAC_TOE
    return (
        <StTicTacToe>
            {items.map(item => <SingleSellNine id={item.position} key={item.position}/>)}
        </StTicTacToe>
    );
};

export default TicTacToe;