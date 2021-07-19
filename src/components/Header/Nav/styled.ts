import styled from 'styled-components';
import { IAppDiv } from 'src/components/App/styled';

export const StNav = styled.div < IAppDiv > `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
        h1{
            font-family: 'Poppins', sans-serif;
            font-size: 25px;
            color: ${({ colors, theme }) => colors[theme].colorTextForm};
        }
        img{
            height: 40px;
        }
    cursor: pointer;
`;
