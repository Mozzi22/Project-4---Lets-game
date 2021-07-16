import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import { StSelect, StOption } from './styled';
import { ISelect } from './types';

const Select: React.FC<ISelect> = ({
    id,
    onClick,
    onChange,
    content,
    name,
    value,
    selected,
    margin,
    padding,
    width,
    height,
    cursor,
    bgColor,
    borderRadius,
    border,
    outline,
    transition,
    fontSize,
    color,
    focusColor,
    bgColorDisabled,
    options,
    defaultValue,
    }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    return (
        <StSelect
            id={id}
            onClick={onClick}
            onChange={onChange}
            content={content}
            name={name}
            value={value}
            borderRadius={borderRadius}
            color={color}
            border={border}
            outline={outline}
            bgColorDisabled={bgColorDisabled}
            focusColor={focusColor}
            fontSize={fontSize}
            bgColor={bgColor}
            cursor={cursor}
            height={height}
            width={width}
            padding={padding}
            margin={margin}
            transition={transition}
            options={options}
            defaultValue={defaultValue}
            theme={theme}
            colors={colors}
        >
            {options.map(el => (
                <StOption
                    id={el.id}
                    value={el.value || options[1]}
                    key={el.id}
                    onClick={onClick}
                    onChange={onChange}
                    selected={selected}
                >
                    {el.label}
                        {t(content)}
                </StOption>
                ))
            }
        </StSelect>
    );
};

export default Select;
