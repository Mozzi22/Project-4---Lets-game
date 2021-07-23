import React from 'react';
import { StCheckers } from './styled';
import SingleSell from './SingleSell';
import { TCheckers } from 'src/Store/games/types';

const Checkers: React.FC<TCheckers> = ({ checker }) => {
    console.log(checker)
    const onHandleClick = (e:React.MouseEvent) => {
    console.log(e.target.value)
}
    return (
        <StCheckers>
            {checker.map((item: TCheckers) => <SingleSell id={item.position} key={item.position} isChecked={item.isChecked} color={item.color} onClick={onHandleClick}/>)}
        </StCheckers>
    );
};

export default Checkers;
