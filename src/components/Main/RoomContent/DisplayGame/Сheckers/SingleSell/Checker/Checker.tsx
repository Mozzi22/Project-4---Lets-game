import React from 'react';
import { TCurrentChecker } from 'src/Store/games/types';
import { StChecker } from './styled'
interface IProps {
    color: string | null;
    position: number;
    isChecked: boolean | null;
    setCurrentChecker: (arg: TCurrentChecker) => void;
}

const Checker: React.FC<IProps> = ({ setCurrentChecker, color, position, isChecked  }) => {
    const onCheckerClick = () => {
        setCurrentChecker({ currentChecker: { color, position, isChecked } })
    };
    return (
        <StChecker
            bgColors={color === 'black'
                ? 'black'
                : 'white'}
            onClick={onCheckerClick}
        />
    );
};

export default Checker;
