import { IAppDiv } from "src/components/App/styled";
import { colors } from 'src/components/UI/themeStyles';

export interface IStInput extends IAppDiv {
    inputHeight?: string;
    padding?: string;
    margin?: string;
    borderColor?: string;
    brRadius?: string;
    bgColor?: string;
    outlineInput?: string;
    cursorType?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    fontWeight?: string;
    fontSizeInp?: string;
    textAlignInput?: string;
    transition?: string;
    bgFocusColor?: string;
    focusColor?: string;
}

export interface IInput {
    id: string;
    type?: string;
    name?: string;
    width?: string;
    label?: string;
    value?: string | (() => void);
    height?: string;
    margin?: string;
    onChange: (value: { name: string; value: string }) => void;
    maxLength?: number;
    inputHeight?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    bgColor?: string;
    padding?: string;
    color?: string;
    bgFocusColor?: string;
    fontSizeInp?: string;
    borderColor?: string;
    placeholder: string;
    errorMessage?: string;
    theme: 'dark' | 'light';
    colors: typeof colors;
}
export interface IStLabel {
    margin?: string;
    cursor?: string;
    display?: string;
    fontWeight?: string;
}
export interface IStInputContainer {
    width?: string;
    height?: string;
}
