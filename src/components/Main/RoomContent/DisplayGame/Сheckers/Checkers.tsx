import React from 'react';
import { StCheckers } from './styled';
import SingleSell from './SingleSell';

const Checkers = ({ checker }) => {
    console.log(checker)
    return (
        <StCheckers>
            {checker.map(item => <SingleSell id={item.position} key={item.position} isChecked={item.isChecked} color={item.color}/>)}
        </StCheckers>
    );
};

export default Checkers;
