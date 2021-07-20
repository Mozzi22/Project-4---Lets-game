import styled from 'styled-components';
import { IStInput, IStLabel, IStInputContainer } from './types';
import {
  bgFocusColorDefault,
  focusColorDefaultInput,
  boxShadowColor,
} from '../baseLayout';

export const StLabel = styled.label < IStLabel > `
    ${({ margin = '0 0px 10px 0' }) => margin && `margin: ${margin}`};
    padding: 0;
    justify-content: flex-start;
    ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
    ${({ display = 'block' }) => display && `display: ${display}`};
    ${({ fontWeight = 'bold' }) => fontWeight && `font-weight: ${fontWeight}`};
`;

export const StInput = styled.input < IStInput > `
    width: 100%;
    height: ${({ inputHeight = '100%' }) => inputHeight};
    padding: ${({ padding = '5px' }) => padding};
    ${({ margin }) => margin && `margin: ${margin}`};
    ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor}`};
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    ${({ brRadius }) => brRadius && `border-radius: ${brRadius}`};
    background-color: ${({ colors, theme }) => colors[theme].backgroundForm};
    box-shadow: ${({ boxShadow = boxShadowColor }) => (boxShadow)};
    ${({ outlineInput = 'none' }) => outlineInput && `outline: ${outlineInput}`};
    ${({ cursorType }) => cursorType && `cursor: ${cursorType}`};
    border: 1px solid;
    border-color: ${({ colors, theme }) => colors[theme].borderColorForm};
    border-radius: 7px;
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
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
      padding: 0 10px;
      color: ${({ colors, theme }) => colors[theme].colorTextForm};
      font-size: ${({ fontSizeInp = '14px' }) => fontSizeInp};
    }
    &::-webkit-input-placeholder {opacity: 1; transition: opacity 0.3s ease;}
    &::-moz-placeholder {opacity: 1; transition: opacity 0.3s ease;}
    &:-ms-input-placeholder {opacity: 1; transition: opacity 0.3s ease;}
    &:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
    &:focus::-moz-placeholder {opacity: 0; transition: opacity 0.3s ease;}
    &:focus:-moz-placeholder {opacity: 0; transition: opacity 0.3s ease;}
    &:focus:-ms-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
`;

export const StErrorSpan = styled.span`
    color: ${({ color = 'red' }) => color};
`;

export const StInputContainer = styled.div < IStInputContainer > `
    ${({ width = '100%' }) => width && `width: ${width}`};
    ${({ height = '50px' }) => height && `height: ${height}`};
`;
