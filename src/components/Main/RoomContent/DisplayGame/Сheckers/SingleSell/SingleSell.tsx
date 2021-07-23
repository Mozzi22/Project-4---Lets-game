import React from 'react';
import { StSingleSell } from './styled';
import Checker from 'src/components/Main/RoomContent/DisplayGame/Сheckers/SingleSell/Checker';
import { TSingleSell } from 'src/components/Main/RoomContent/DisplayGame/types';
const SingleSell: React.FC<TSingleSell> = ({ id, isChecked, color }) => {
    const handleClick = (e: React.MouseEvent) => {
        console.log(e.target.id);
    };
    const background = parseInt((id / 8) + id) % 2 === 0 ? 'grey' : 'white';
    const currentId = id + 1;
    return (
        <StSingleSell
            id={currentId}
            backgroungColor={background}
            onClick={handleClick}
        >
            {isChecked ? <Checker position={id} isChecked={isChecked} color={color}/> : null}
        </StSingleSell>
    );
};

export default SingleSell;
