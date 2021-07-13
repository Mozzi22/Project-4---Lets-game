import styled from 'styled-components';
import {
  bgColorDefault,
  colorDefault,
  focusColorDefault,
  disabledColor,
  bgColorDisabledDefault,
  disabledBorder,
} from '../baseLayout';

interface IBtn {
     
        margin: string; 
        padding: string; 
        width: string; 
        height: string; 
        cursor: string;
        bgColor: 'string',
        borderRadius: 'string',
        border: 'string', 
        outline: 'string',
        transition: 'string',
        fontSize: 'string',
        focusColor: 'string',
        bgColorDisabled: 'string',
     
}
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
    color: ${({ focusColor = focusColorDefault }) => focusColor}; 
    border: ${({ border = 'none' }) => border};
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
