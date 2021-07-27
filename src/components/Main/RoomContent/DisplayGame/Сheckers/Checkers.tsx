import React from 'react';
import { StCheckers } from './styled';
import SingleSell from './SingleSell';
import { INITIAL_STATE_FOR_CHECKER } from 'src/constants/ui';

const Checkers = () => {
    return (
        <StCheckers>
            {INITIAL_STATE_FOR_CHECKER.map(item => <SingleSell id={item} key={item}/>,
            )}
        </StCheckers>
    );
};

export default Checkers;
