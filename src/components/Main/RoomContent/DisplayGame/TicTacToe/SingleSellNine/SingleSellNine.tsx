import React from 'react';
import { StSingleSellNine } from './styled';
import { TSingleSell } from 'src/components/Main/RoomContent/DisplayGame/types';
import CrossAndZero from './CrosssAndZero';

const SingleSellNine: React.FC<TSingleSell> = ({ id, isChecked, figure }) => {
    const handleClick = (e: React.MouseEvent) => {
        console.log(e.target.id);
    };
    const currentId = id + 1;
    return (
        <StSingleSellNine 
        onClick={handleClick}
        >
            {currentId}
            {figure !== null ? <CrossAndZero position={id} isChecked={isChecked} figure={figure}/> : null}
        </StSingleSellNine>
    );
};

export default SingleSellNine;
