import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import { StLink } from './styled';
import { ILink } from './types';

const Link = ({
    id,
    href,
    onClick,
    title,
    type = 'button',
    value,
    borderRadius,
    isDisabled,
    color,
    fontSize,
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
}: ILink) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    return (
        <StLink
            id={id}
            href={href}
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
            bgColor={bgColor}
            height={height}
            width={width}
            padding={padding}
            margin={margin}
            transition={transition}
            theme={theme}
            colors={colors}
        >
            {t(content)}
        </StLink>
    );
};

export default Link;
