import styled from 'styled-components';
import { bgColorDefault, colorDefault } from 'src/components/UI/baseLayout';
import { IStRoom } from './types';

export const StRoomListItems = styled.div`
    display: flex;
    overflow: hidden;
    height: 60px;
    align-items: center;
    color: ${({ color = colorDefault }) => color};
    margin: 0 0 20px;
    border-radius: 5px;
    padding: 7px 15px;
    background-color: #2acbb9;
    cursor: pointer;
        ul {
          padding-left: 1rem;
          list-style-type: none;
        }
        :hover{
            color: ${({ color = bgColorDefault }) => color};
            span{
                color: ${({ color = colorDefault }) => color};
            }
        }
`;
export const StRoom = styled.div < IStRoom > `
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
        p{
            font-size: 26px;
            width:80%;
        }
        div{
            width: 80%;
            font-size: 16px;
            color: #eee;
            text-transform: capitalize;
        }
        span{
            width: 30px;
            height: 30px;
            display:flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            border-radius: 50%;
            background-color: ${({ bgColor = bgColorDefault }) => bgColor};
        }
`;
