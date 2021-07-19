import React from 'react';
import { StSingleSellNine } from './styled';
import { TSingleSell } from '../../types';

const SingleSellNine: React.FC<TSingleSell> = ({ id }) => {
    const handleClick = (e: React.MouseEvent) => {
        console.log(e.target.id);
    };
    const currentId = id + 1;
    return (
        <StSingleSellNine 
        onClick={handleClick}
        >
            {currentId}
        </StSingleSellNine>
    );
};

export default SingleSellNine;
