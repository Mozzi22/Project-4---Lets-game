import styled from 'styled-components';
import { colorDefault, textColorGray, bgBlue } from '../baseLayout';
import { IStFormDiv } from './types';

export const StFormDiv = styled.div < IStFormDiv > `
    ${({ backgroundColor = colorDefault }) => backgroundColor && `background-color: ${backgroundColor}`};
    min-height: 545px;
    display: flex;
    width: 500px;
    max-width: 100%;
    margin: 20px auto 0 auto;
    padding: 40px 0;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-family: 'Oxanium', cursive;
    border-radius: 7px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    ${({ color = colorDefault }) => color && `color: ${color}`};
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
        p{
          font-size: 36px;
          padding: 0;
          margin: 10px 0 0;
          ${({ color = textColorGray }) => color && `color: ${color}`};
        }
        span{
          color: #3c3b3b;
          padding: 0;
          width: 100%;
          margin-left: 100px;
        }
        a{
          margin-left: 5px;
          padding: 0 0 3px;
          text-decoration: none;
          color: #3c3b3b;
          font-weight: 500;
          border-bottom: 1px solid #78dec7;
          &:hover{
            border-bottom: 1px solid #3c3b3b;
          }
        }
        button{
          margin: 60px 0 25px;
          font-size: 18px;
          text-transform: uppercase;
          background-color: #78dec7;
          width: 400px;
          height: 40px;
          color: #484b54;
        }
        @media (max-width: 920px){
            width: 100%;
            border-radius: 0px;
        }
`;
