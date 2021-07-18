import React from 'react';
import { StCheckers } from './styled';
import SingleSell from './SingleSell';

const Checkers = () => {
    const items = [];
    for (let i = 63; i > -1; i--) {
        items.push(i);
    }
    return (
        <StCheckers>
            {items.map(item => <SingleSell id={item} key={item}/>,
            )}
        </StCheckers>
    );
};

export default Checkers;
