import styled from 'styled-components';

export const StChecker = styled.div<{bgColors: string}>`
    border: 2px solid black;
    display: flex;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 2px 2px black;
    background-color: ${({ bgColors = 'green' }) => bgColors};
    &::after {
        border: 2px solid black;
        background-color: ${({ bgColors = 'green' }) => bgColors};

    }
`;
