import React from 'react';
import { colors } from 'src/components/UI/themeStyles';
import { IAppDiv } from 'src/components/App/styled';

export interface IBtn extends IAppDiv {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    cursor?: string;
    background?: string;
    bgColor?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    focusColorDefault?: string;
    borderRadius?: string;
    border?: string;
    outline?: string;
    transition?: string;
    fontSize?: string;
    focusColor?: string;
    bgColorDisabled?: string;
}
export interface IButton {
    id: string;
    name?: string;
    onClick: (e : React.MouseEvent<HTMLElement, MouseEvent>) => void;
    title?: string;
    type?: 'button';
    value?: string;
    borderRadius?: string;
    isDisabled?: boolean;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    bgColorDisabled?: string;
    bgColor?: string;
    bgColorHover?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    focusColorDefault?: string;
    height?: string;
    width?: string;
    padding?: string;
    margin?: string;
    content?: string;
    transition?: string;
    theme?: 'dark' | 'light';
    colors?: typeof colors;
}
