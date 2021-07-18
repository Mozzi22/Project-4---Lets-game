import styled from 'styled-components';

import {
  hoverBgDefault,
} from '../baseLayout';
import { ILink } from './types';

export const StLink = styled.button < ILink > `
  ${({ margin = '0 0 3px 0' }) => margin && `margin: ${margin}`};
  font-family: 'Poppins', sans-serif;
  padding: ${({ padding = '5px' }) => padding};
  width: ${({ width = '170px' }) => width};
  height: ${({ height = '35px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ colors, theme }) => colors[theme].colorTextForm};
  border-radius: ${({ borderRadius = '0' }) => borderRadius};
  border: ${({ border = '0' }) => border};
  outline: ${({ outline = 'none' }) => outline};
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  background-color: ${({ bgColor = 'transparent' }) => bgColor};
  background-image: ${({ colors, theme }) => colors[theme].backgroundImage};
  background-size:  ${({ backgroundSize = 'cover' }) => backgroundSize};
  &:hover {
    border: ${({ border = 'none' }) => border};
    }
    background-color: ${({ bgColor = hoverBgDefault }) => bgColor};
  &:focus {
    color:  ${({ colors, theme }) => colors[theme].backgroundButton};
    border: ${({ border = 'none' }) => border};
    background-color: ${({ bgColor = 'transparent' }) => bgColor};
    }
`;
