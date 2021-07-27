import styled from 'styled-components';

export const StSingleSell = styled.div <{ color?: string }> `
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    font-size: 70px;
    justify-content: center;
    align-items: center;
    ${({ color = 'white' }) => color && `background-color: ${color}`};
`;

export const StPossition = styled.div`
    width:  50px;
    height: 50px;
    cursor: pointer;
    background-color: #aa03d9;
    z-index: 1000;
`;