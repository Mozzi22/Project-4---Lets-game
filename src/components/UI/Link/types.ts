import React from 'react';
import { IAppDiv } from 'src/components/App/styled';
import { colors } from 'src/components/UI/themeStyles';

export interface ILink extends IAppDiv {
    id: string;
    name?: string;
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    href?: string;
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
    theme: 'dark' | 'light';
    colors: typeof colors;
}
