import React from 'react';
import { colors } from 'src/components/UI/baseLayout';

export interface IBtn {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    cursor?: string;
    bgColor?: string;
    borderRadius?: string;
    border?: string;
    outline?: string;
    transition?: string;
    fontSize?: string;
    focusColor?: string;
    bgColorDisabled?: string;
    theme: 'dark' | 'light';
    colors: typeof colors;
}
export interface IButton{
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
    height?: string;
    width?: string;
    padding?: string;
    margin?: string;
    content: string;
    transition?: string;
    focusColor?: string;
}
