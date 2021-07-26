import React from 'react';
import { StSingleSell, StPossition} from './styled';
import Checker from 'src/components/Main/RoomContent/DisplayGame/Сheckers/SingleSell/Checker';
import { TSingleSell } from 'src/components/Main/RoomContent/DisplayGame/types';
import { white, blackPic } from 'src/components/UI/baseLayout';

const SingleSell = ({ id, status, getPosibleStep, position, doCheckerStep }) => {
    //  const handleClick = (e) => {
    //     if (position) {
    //        return doCheckerStep(id);
    //     }
    //     getPosibleStep(e.target.id);
    // };
    // const background = parseInt((id / 8) + id) % 2 === 0 ? 'grey' : 'white';
    // const currentId = id + 1;
    // return (
    //     <StSingleSell
    //         id={currentId}
    //         backgroungColor={background}
    //         onClick={handleClick}
    //     >
    //         {isChecked ? <Checker position={id} isChecked={isChecked} color={color}/> : null}
    //     </StSingleSell>
    // );
        const handleClick = (e) => {
        if (position) {
           return doCheckerStep(id);
        }
        getPosibleStep(e.target.id);
    };
    return (
        <StSingleSell
            onClick={handleClick}
            id={id}
            color={status?.blackSquare ? `${blackPic}` : `${white}`}
        >
            {position ? <StPossition /> : position}
            {status?.checker ? status?.checker.blackChecker ? '●' : '○' : null}
            
        </StSingleSell>
    );
};

export default SingleSell;
