import React from 'react';
import { useTranslation } from 'react-i18next';
import { StButton } from './styled';

interface IButton{
    id: number | string;
    name?: string;
    onClick: (e : React.MouseEvent<HTMLElement, MouseEvent>) => void;
    title?: string;
    type?: string;
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
    content?: string;
    transition?: string;
    focusColor?: string;
}
const Button = ({
    id,
    name,
    onClick,
    title,
    type = 'button',
    value,
    borderRadius,
    isDisabled,
    color,
    fontSize,
    fontWeight,
    bgColorDisabled,
    bgColor,
    bgColorHover,
    height,
    width,
    padding,
    margin,
    content,
    transition,
    focusColor,
}: IButton) => {
    const { t } = useTranslation();
    return (
        <StButton
            id={id}
            name={name}
            onClick={onClick}
            type={type}
            value={value}
            title={title}
            bgColorDisabled={bgColorDisabled}
            borderRadius={borderRadius}
            isDisabled={isDisabled}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            bgColor={bgColor}
            bgColorHover={bgColorHover}
            height={height}
            width={width}
            padding={padding}
            margin={margin}
            transition={transition}
            focusColor={focusColor}
        >
            {t(content)}
        </StButton>
    );
};

export default Button;
