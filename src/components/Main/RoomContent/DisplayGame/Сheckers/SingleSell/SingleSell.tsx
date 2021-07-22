import React from 'react';
import { StSingleSell } from './styled';
import { TSingleSell } from 'src/components/Main/RoomContent/DisplayGame/types';
const SingleSell: React.FC<TSingleSell> = ({ id, isChecked }) => {
    const handleClick = (e: React.MouseEvent) => {
        console.log(e.target.id);
    };
    const background = parseInt((id / 8) + id) % 2 === 0 ? 'black' : 'white';
    const currentId = id + 1;
    return (
        <StSingleSell
            id={currentId}
            // content={content}
            backgroungColor={background}
            onClick={handleClick}
        >
            {isChecked ? "CHE" : null}
            {currentId}
        </StSingleSell>
    );
};

export default SingleSell;