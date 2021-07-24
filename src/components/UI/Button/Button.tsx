import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import { StButton } from './styled';
import { IButton } from './types';

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
    lineHeight,
    bgColorDisabled,
    bgColor,
    backgroundImage,
    backgroundSize,
    height,
    width,
    padding,
    margin,
    content,
    transition,
    hoverColor
}: IButton) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    return (
        <StButton
            id={id}
            name={name}
            onClick={onClick}
            type={type}
            value={value}
            title={title}
            bgColorDisabled={bgColorDisabled}
            backgroundImage={backgroundImage}
            backgroundSize={backgroundSize}
            borderRadius={borderRadius}
            disabled={isDisabled}
            color={color}
            fontSize={fontSize}
            lineHeight={lineHeight}
            bgColor={bgColor}
            height={height}
            width={width}
            padding={padding}
            margin={margin}
            transition={transition}
            hoverColor={hoverColor}
            theme={theme}
            colors={colors}
        >
            {t(content)}
        </StButton>
    );
};

export default Button;
