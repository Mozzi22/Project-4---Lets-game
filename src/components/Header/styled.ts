import styled from 'styled-components';
import { IAppDiv } from 'src/components/App/styled';
import { colors } from 'src/components/UI/themeStyles';

export const StHeader = styled.div < IAppDiv > `
    border-bottom: 1px solid;
    border-color: ${({ colors, theme }) => colors[theme].borderColor};
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height:80px;
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
`;
