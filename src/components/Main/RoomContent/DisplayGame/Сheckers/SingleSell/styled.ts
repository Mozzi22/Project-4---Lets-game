import styled from 'styled-components';

export const StSingleSell = styled.div <{ backgroungColor?: string }>`
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ backgroungColor }) => backgroungColor};
`;
