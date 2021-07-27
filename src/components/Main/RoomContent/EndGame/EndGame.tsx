import React from 'react';
import { StEndGame } from './styled';
import { useTheme } from 'src/components/Hooks/useTheme';

function EndGame({ winner }) {
const { colors, theme } = useTheme();
    return (
        <StEndGame theme={theme} colors={colors}>
            {winner}
        </StEndGame>
    );
}

export default EndGame;
