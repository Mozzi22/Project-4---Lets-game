import React from 'react';
import { StCrossAndZero } from './styled'
interface IProps {
    figure: string | null;
    position: number;
    isChecked: boolean | null;
    // setCurrentChecker: (arg: TCurrentChecker) => void;
}

const CrossAndZero: React.FC<IProps> = ({ content, figure }) => {
    // const onCheckerClick = () => {
    //     setCurrentChecker({ currentChecker: { color, position, isChecked } })
    // };
    return (
        <StCrossAndZero
            content={figure === 'cross'
                ? 'X'
                : 'O'}
            // onClick={onCheckerClick}
        >
            {content}
        </StCrossAndZero>
    );
};

export default CrossAndZero;
