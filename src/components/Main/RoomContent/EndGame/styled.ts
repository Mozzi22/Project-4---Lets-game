import styled from 'styled-components';

export const StEndGame = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        color: ${({ colors, theme }) => colors[theme].focusColorDefault};

`;