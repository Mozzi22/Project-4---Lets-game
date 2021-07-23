import React from 'react';
import { StCheckers } from './styled';
import SingleSell from './SingleSell';
import { TCheckers } from 'src/Store/games/types';

const Checkers: React.FC<TCheckers> = ({ checker }) => {
    return (
        <StCheckers>
            {checker.map((item: TCheckers) =>
                <SingleSell
                    id={item.position}
                    key={item.position}
                    isChecked={item.isChecked}
                    color={item.color}
                />
            )}
        </StCheckers>
    );
};

export default Checkers;
