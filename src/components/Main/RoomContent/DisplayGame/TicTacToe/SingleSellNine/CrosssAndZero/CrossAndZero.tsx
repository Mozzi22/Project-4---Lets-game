import React from 'react';
import { StCrossAndZero } from './styled'
interface IProps {
    figure: string | null;
}

const CrossAndZero: React.FC<IProps> = ({ figure }) => {
    return (
        <StCrossAndZero
        >
            {figure}
        </StCrossAndZero>
    );
};

export default CrossAndZero;
