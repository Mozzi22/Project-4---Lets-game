import React from 'react';

export interface ISelect {
    id: string;
    name?: string;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    content?: string;
    selected: string;
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
}
