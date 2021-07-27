
import styled from 'styled-components';

export const StWelcome = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ colors, theme }) => colors[theme].focusColorDefault};
    align-items: center;
    width: 100%;
    height: 300px;
    text-align: center;
    border-radius: 3px;
    justify-content: center;
`;
