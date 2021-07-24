import styled from 'styled-components';
import { bgColorDefault, bgColorDefaultFon } from 'src/components/UI/baseLayout';

export const StRoomList = styled.div`
    background-color: ${({ color = bgColorDefaultFon }) => color};
    padding: 15px;
    display: flex;
    width: 25%;
    margin-right: 0;
    font-size: 24px;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    border-radius: 0px;
    position: relative;
    height: 90vh;
`;
export const StControlPanel = styled.div`
    display: flex;
    width: 100%;
    margin-right: 0;
    font-size: 24px;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    border-radius: 0px;
`;
export const StItems = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    overflow-y: hidden;
    &:hover {
        overflow-y: auto;
        overflow-x: auto;
    }
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        width: 8px;
        background-color: ${({ color = bgColorDefault }) => color};
    }
`;
