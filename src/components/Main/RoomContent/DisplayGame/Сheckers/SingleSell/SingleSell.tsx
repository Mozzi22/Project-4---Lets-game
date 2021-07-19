import React from 'react';
import { StSingleSell } from './styled';
import { TSingleSell } from '../../types';

const SingleSell: React.FC<TSingleSell> = ({ id }) => {
    const handleClick = (e: React.MouseEvent) => {
        console.log(e.target.id);
    };
    const background = parseInt((id / 8) + id) % 2 === 0 ? 'black' : 'white';
    const currentId = id + 1;
    console.log(background)
    return (
        <StSingleSell
            id={currentId}
            backgroungColor={background}
            onClick={handleClick}
        >
            {currentId}
        </StSingleSell>
    );
};

export default SingleSell;
