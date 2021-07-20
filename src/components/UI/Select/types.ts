import React from 'react';
import { IAppDiv } from 'src/components/App/styled';
import { colors } from 'src/components/UI/themeStyles';

export interface ISelect extends IAppDiv {
    id: string;
    name?: string;
    value?: string;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    content?: string;
    key?: string;
    label: string;
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
    color?: string;
    focusColor?: string;
    bgColorDisabled?: string;
    options: Array<string>;
    defaultValue?: string;
    theme: 'dark' | 'light';
    colors: typeof colors;
}

export interface IOption extends ISelect {
    selected?: string;
}
