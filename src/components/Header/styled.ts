import styled from 'styled-components';
import { IAppDiv } from '../App/styled';

export const StHeader = styled.div < IAppDiv > `
    border-bottom: 2px solid;
    border-color: ${({ colors, theme }) => colors[theme].borderColor};
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
`;
