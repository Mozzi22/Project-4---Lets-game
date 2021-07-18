import React from 'react';
import { StCheckers } from './styled';
import SingleSellNine from './SingleSellNine';

const Checkers = () => {
    const items = [];
    for (let i = 8; i > -1; i--) {
        items.push(i);
    }
    return (
        <StCheckers>
            {items.map(item => <SingleSellNine id={item} key={item}/>,
            )}
        </StCheckers>
    );
};

export default Checkers;
