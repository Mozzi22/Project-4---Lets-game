import React from 'react';
import { StSingleSellNine } from './styled';

const SingleSell = ({ id }) => {
    const handleClick = (e) => {
        console.log(e.target.id);
    };

    return (
        <StSingleSellNine 
        id={id + 1} 
        // style={{ background: parseInt((id / 10) + id) % 2 === 0 ? 'grey' : 'white' }} 
        onClick={handleClick}
        >
            {id + 1}
        </StSingleSellNine>
    );
};

export default SingleSell;
