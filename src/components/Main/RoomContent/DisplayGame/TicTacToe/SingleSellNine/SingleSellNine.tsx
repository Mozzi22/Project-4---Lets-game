import React from 'react';
import { StSingleSellNine } from './styled';
import { TSingleSellNine } from './types'

const SingleSellNine: React.FC<TSingleSellNine> = ({ id }) => {
    const handleClick = (e: React.MouseEvent) => {
        console.log(e.target.id);
    };

    return (
        <StSingleSellNine 
        id={id + 1} 
        onClick={handleClick}
        >
            {id + 1}
        </StSingleSellNine>
    );
};

export default SingleSellNine;
