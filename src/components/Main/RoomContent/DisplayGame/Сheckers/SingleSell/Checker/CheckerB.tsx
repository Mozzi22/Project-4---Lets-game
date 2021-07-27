import React from 'react';
import { TCheckers } from 'src/components/Main/RoomContent/DisplayGame/Сheckers/types';
import { StChecker } from './styled'

const CheckerWhite: React.FC<TCheckers> = ({ bgColors, id }) => {
    return (
        <StChecker
            id={id}
            bgColors= {bgColors}
        />
    );
};

export default CheckerWhite;
