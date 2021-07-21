import styled from 'styled-components';

import {
  disabledColor,
  bgColorDisabledDefault,
  disabledBorder,
  hoverBgDefault,
} from '../baseLayout';
import { IBtn } from './types';

export const StButton = styled.button < IBtn > `
  ${({ margin = '0 0 3px 0' }) => margin && `margin: ${margin}`};
  font-family: 'Poppins', sans-serif;
  padding: ${({ padding = '5px' }) => padding};
  width: ${({ width = '170px' }) => width};
  height: ${({ height = '35px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ colors, theme }) => colors[theme].colorTextForm};
  border-radius: ${({ borderRadius = '7px' }) => borderRadius};
  border: ${({ border = 'none' }) => border};
  outline: ${({ outline = 'none' }) => outline};
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  background-color: ${({ bgColor = 'transparent' }) => bgColor};
  background-image: ${({ colors, theme }) => colors[theme].backgroundImage};
  background-size:  ${({ backgroundSize = '0' }) => backgroundSize};
  &:hover {
    border: ${({ border = 'none' }) => border};
    }
    background-color: ${({ bgColor = hoverBgDefault }) => bgColor};
  &:focus {
    color:  ${({ colors, theme }) => colors[theme].focusColorDefault};
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
