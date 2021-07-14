import styled from 'styled-components';
import {
  bgSelect,
  textColorBlack,
  focusColorDefault,
  disabledColor,
  bgColorDisabledDefault,
  disabledBorder,
  activeBorder,
} from '../baseLayout';

import { ISelect, IOption } from './types';

export const StSelect = styled.select < ISelect > `
  ${({ margin = '0 0 3px 0' }) => margin && `margin: ${margin}`};
  font-family: 'Oxanium', cursive;
  padding: ${({ padding = '5px' }) => padding};
  width: ${({ width = '170px' }) => width};
  height: ${({ height = '30px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ color = textColorBlack }) => color};
  background-color: ${({ bgColor = bgSelect }) => bgColor};
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
  &:hover {
    color: ${({ focusColor = focusColorDefault }) => focusColor};
    }
  &:focus {
    color: ${({ focusColor = focusColorDefault }) => focusColor};
    }
  &:disabled{
    border: ${({ border = disabledBorder }) => border};
    background-color: ${({ bgColorDisabled = bgColorDisabledDefault }) => bgColorDisabled};
    color: ${({ focusColor = disabledColor }) => focusColor};
    }
`;

export const StOption = styled.option < IOption > `
  font-family: 'Oxanium', cursive;
`;
