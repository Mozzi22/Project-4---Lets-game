import styled from 'styled-components';
import { IBtn } from './types';
import {
  bgColorDefault,
  colorDefault,
  focusColorDefault,
  disabledColor,
  bgColorDisabledDefault,
  disabledBorder,
  hoverBgDefault,
} from '../baseLayout';

export const StButton = styled.button < IBtn > `
  ${({ margin = '0 0 3px 0' }) => margin && `margin: ${margin}`};
  font-family: 'Play', sans-serif;
  padding: ${({ padding = '5px' }) => padding};
  width: ${({ width = '170px' }) => width};
  height: ${({ height = '35px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ color = colorDefault }) => color};
  background-color: ${({ bgColor = bgColorDefault }) => bgColor};
  border-radius: ${({ borderRadius = '7px' }) => borderRadius};
  border: ${({ border = 'none' }) => border};
  outline: ${({ outline = 'none' }) => outline};
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  &:hover {
    border: ${({ border = 'none' }) => border};
    }
    background-color: ${({ bgColor = hoverBgDefault }) => bgColor};
  &:focus {
    color: ${({ focusColor = focusColorDefault }) => focusColor};
    background-color: ${({ bgColor = hoverBgDefault }) => bgColor};
    }
  &:active{
    border: ${({ border = disabledBorder }) => border};
    background-color: ${({ bgColorDisabled = '#00a6ff' }) => bgColorDisabled};
    }
  &:disabled{
    border: ${({ border = disabledBorder }) => border};
    background-color: ${({ bgColorDisabled = bgColorDisabledDefault }) => bgColorDisabled};
    color: ${({ focusColor = disabledColor }) => focusColor};
    }
`;
