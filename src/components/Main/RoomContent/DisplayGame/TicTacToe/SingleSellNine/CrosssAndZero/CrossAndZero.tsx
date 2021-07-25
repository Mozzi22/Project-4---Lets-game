import React from 'react';
import { StCrossAndZero } from './styled'
interface IProps {
    figure: string | null;
    position: number;
    isChecked: boolean | null;
    // setCurrentChecker: (arg: TCurrentChecker) => void;
}

const CrossAndZero: React.FC<IProps> = ({ figure, position }) => {
    // const onCheckerClick = () => {
    //     setCurrentChecker({ currentChecker: { color, position, isChecked } })
    // };
    const handleClick = () => onClick(position);
    console.log(position)
    return (
        <StCrossAndZero
            onClick={figure ? null : handleClick}
        >
            {figure}
        </StCrossAndZero>
    );
};

export default CrossAndZero;
