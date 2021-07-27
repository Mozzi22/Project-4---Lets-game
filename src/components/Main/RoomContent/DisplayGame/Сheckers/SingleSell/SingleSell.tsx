import React from 'react';
import { StSingleSell, StPossition} from './styled';
import Checker from 'src/components/Main/RoomContent/DisplayGame/Сheckers/SingleSell/Checker';
import CheckerB from 'src/components/Main/RoomContent/DisplayGame/Сheckers/SingleSell/Checker/CheckerB'
import { TCheckers } from 'src/components/Main/RoomContent/DisplayGame/Сheckers/types';

const SingleSell: React.FC<TCheckers> = ({ id, status, getPosibleStep, position, doCheckerStep }) => {
    const handleClick = (e: React.MouseEvent) => {
        if (position) {
           return doCheckerStep(id);
        }
        console.log('e.target.id', e.target);
        getPosibleStep(e.target.id);
    };
    return (

        <StSingleSell
            onClick={handleClick}
            id={id}
            color={status?.blackSquare ? 'grey' : 'white'}
        >
            {position ? <StPossition /> : position}
            {status?.checker ? status?.checker.blackChecker
                ? <CheckerB id={id} bgColors='black' />
                : <Checker handleClick={handleClick} id={id} bgColors='white' />
                : null}
            
        </StSingleSell>
    );
};

export default SingleSell;
