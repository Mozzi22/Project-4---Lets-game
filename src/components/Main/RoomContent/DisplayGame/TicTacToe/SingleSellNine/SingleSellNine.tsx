import React from 'react';
import { StSingleSellNine } from './styled';
import { TSingleSell } from 'src/components/Main/RoomContent/DisplayGame/types';

const SingleSellNine: React.FC<TSingleSell> = ({ id }) => {
    const handleClick = (e: React.MouseEvent) => {};
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
