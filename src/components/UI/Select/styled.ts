import styled from 'styled-components';

import {
  bgSelect,
  disabledColor,
  bgColorDisabledDefault,
  disabledBorder,
  activeBorder,
} from '../baseLayout';

import { ISelect } from './types';

export const StSelect = styled.select < ISelect > `
  ${({ margin = '0 0 3px 0' }) => margin && `margin: ${margin}`};
  font-family: 'Poppins', sans-serif;
  padding: ${({ padding = '0 0 0 5px' }) => padding};
  width: ${({ width = '170px' }) => width};
  height: ${({ height = '30px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ colors, theme }) => colors[theme].colorTextForm};
  background-color: ${({ colors, theme }) => colors[theme].backgroundSelect};
  border-radius: ${({ borderRadius = '7px' }) => borderRadius};
  border: ${({ border = activeBorder }) => border};
  outline: ${({ outline = 'none' }) => outline};
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  option {
      background-color: ${({ bgColor = bgSelect }) => bgColor};
      &:hover {
          background-color: ${({ bgColor = bgSelect }) => bgColor};
      }
  }
  &:disabled{
    border: ${({ border = disabledBorder }) => border};
    background-color: ${({ bgColorDisabled = bgColorDisabledDefault }) => bgColorDisabled};
    color: ${({ focusColor = disabledColor }) => focusColor};
    }
`;

export const StOption = styled.option`
  font-family: 'Poppins', sans-serif;
  color: #000;
  font-size: 14px;
`;
