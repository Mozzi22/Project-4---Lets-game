import React from 'react';
import { useTranslation } from 'react-i18next';
import { StSelect, StOption } from './styled';
import { ISelect } from './types';

const Select: React.FC<ISelect> = ({
    id,
    onClick,
    content,
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
    return (
        <StSelect
            id={id}
            onClick={onClick}
            content={content}
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
        >
            {options.map(el => (
                <StOption
                    id={id}
                    value={el.value}
                    key={`${el.key}`}
                    onClick={onClick}
                    selected={selected}
                >
                    {t(el.content)}
                </StOption>
            ))
            }
        </StSelect>
    );
};

export default Select;
