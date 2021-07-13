import React from 'react';
import { useTranslation } from 'react-i18next';
import { StSelect, StOption } from './styled';
import { ISelect } from './types';

const Select = ({
    id,
    onClick,
    content,
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
    }: ISelect) => {
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
        >
            {options.map((el, index) => (
                <StOption
                    id={id}
                    value={el.value}
                    key={`${el.key + index}`}
                >
            {t(content)}
                </StOption>
            ))
            }
        </StSelect>
    );
};

export default Select;
