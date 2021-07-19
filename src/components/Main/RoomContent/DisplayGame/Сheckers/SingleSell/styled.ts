import styled from 'styled-components';

export const StSingleSell = styled.div <{ backgroungColor?: string }>`
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: ${({ backgroungColor }) => backgroungColor};
`;
