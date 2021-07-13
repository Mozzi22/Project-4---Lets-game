import styled from 'styled-components';
import { 
  bgInpColorDefault, 
  bgFocusColorDefault, 
  focusColorDefaultInput, 
  colorDefaultInput } from '../baseLayout';

export const StLabel = styled.label < { margin: 'string', cursor: 'string', display: 'string', fontWeight: 'string' } > `
   ${({ margin = '0 0px 10px 0' }) => margin && `margin: ${margin}`};
   padding: 0;
   justify-content: flex-start;
   ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
   ${({ display = 'block' }) => display && `display: ${display}`};
   ${({ fontWeight = 'bold' }) => fontWeight && `font-weight: ${fontWeight}`};
`;

export const StInput = styled.input < { 
    inputHeight: 'string', 
    padding: 'string', 
    margin: 'string', 
    borderColor: 'string', 
    brRadius: 'string', 
    bgColor: 'string',
    outlineInput: 'string',
    cursorType: 'string',
    borderRadius: 'string',
    fontWeight: 'string',
    fontSizeInp: 'string',
    textAlignInput: 'string',
    transition: 'string',
    bgFocusColor: 'string',
    focusColor: 'string',

} > `
    width: 100%;
    height: ${({ inputHeight = '100%' }) => inputHeight};
    padding: ${({ padding = '5px' }) => padding};
    ${({ margin }) => margin && `margin: ${margin}`};
    ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor}`};
    box-sizing: border-box;
     font-family: 'Play', sans-serif;
    ${({ brRadius }) => brRadius && `border-radius: ${brRadius}`};
    background-color: ${({ bgColor = bgInpColorDefault }) => (bgColor)};
    ${({ outlineInput = 'none' }) => outlineInput && `outline: ${outlineInput}`};
    ${({ cursorType }) => cursorType && `cursor: ${cursorType}`};
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
    color: ${({ color = colorDefaultInput }) => color};
    font-size: ${({ fontSizeInp = '14px' }) => fontSizeInp};
    ${({ textAlignInput }) => textAlignInput && `text-align: ${textAlignInput}`}
    ${({ transition = 'all 1000ms ease-in-out' }) => transition && `transition: ${transition}`};
    &:focus {
      background:${({ bgFocusColor = bgFocusColorDefault }) => bgFocusColor};
      color: ${({ focusColor = focusColorDefaultInput }) => focusColor};
      &::placeholder {
        
        color: ${({ color = focusColorDefaultInput }) => color};
      }
    }
    &::placeholder {
      color: ${({ color = colorDefaultInput }) => color};
      font-size: ${({ fontSizeInp = '14px' }) => fontSizeInp};
    }
`;

export const StErrorSpan = styled.span`
    color: ${({ color = 'red' }) => color};
`;

export const StInputContainer = styled.div < { width: 'string', height: 'string' } > `
    ${({ width = '100%' }) => width && `width: ${width}`};
    ${({ height = '50px' }) => height && `height: ${height}`};
`;
