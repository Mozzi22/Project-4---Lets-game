import React from 'react';
import { StSingleSellNine } from './styled';
import { TSingleSell } from 'src/components/Main/RoomContent/DisplayGame/types';
import CrossAndZero from './CrosssAndZero';

const SingleSellNine: React.FC<TSingleSell> = ({ onClick, id, isChecked, figure }) => {
    const handleClick = () => onClick(id);
    return (
        <StSingleSellNine 
        onClick={figure ? null : handleClick}
        >
            {figure ? <CrossAndZero position={id} isChecked={isChecked} figure={figure}/> : null}
        </StSingleSellNine>
    );
};

export default SingleSellNine;
