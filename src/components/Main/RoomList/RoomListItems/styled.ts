import styled from 'styled-components';
import { bgColorDefault, colorDefault } from 'src/components/UI/baseLayout';
import { IStRoom } from './types';

export const StRoomListItems = styled.div`
    display: flex;
    overflow: hidden;
    min-height: 60px;
    align-items: center;
    color: ${({ color = colorDefault }) => color};
    margin: 0 20px 20px;
    border-radius: 5px;
    padding: 7px 15px;
    background-color: #2acbb9;
    cursor: pointer;
        ul {
            padding-left: 1rem;
            list-style-type: none;
        }
        :hover {
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
    max-height: 55px;
    overflow: hidden;
        h2 {
            font-size: 18px;
            margin: 0;
            overflow-wrap: break-word;
        }
        h3 {
            font-size: 16px;
            text-transform: capitalize;
            margin: 0;
            overflow-wrap: break-word;
            line-height: 30px;
        }
        div {
            width: 80%;
            color: #eee;
            max-height: 60px;
            padding: 20px 0;
        }
`;
