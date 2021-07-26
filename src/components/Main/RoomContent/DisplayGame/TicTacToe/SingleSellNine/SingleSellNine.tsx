import React from 'react';
import { StSingleSellNine } from './styled';
import { TSingleSell } from 'src/components/Main/RoomContent/DisplayGame/types';
import CrossAndZero from './CrosssAndZero';

const SingleSellNine: React.FC<TSingleSell> = ({  id, doStep, status }) => {
    let item = '';
    switch (status) {
        case 'X': item = 'X'; break;
        case 'O': item = 'O'; break;
        case '': item = ''; break;
        default: break;
    }
    const handleClick = () => doStep(id);
    return (
        <StSingleSellNine
            id={id}
            onClick={handleClick}
        >
             { item }
            {/* {figure ? <CrossAndZero position={id} isChecked={isChecked} figure={figure}/> : null} */}
        </StSingleSellNine>
    );
};

export default SingleSellNine;
