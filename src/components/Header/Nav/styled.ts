import styled from 'styled-components';
import { colors } from 'src/components/UI/themeStyles';

export const StNav = styled.div`
    display: flex;
    justify-content: space-evenly;
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
