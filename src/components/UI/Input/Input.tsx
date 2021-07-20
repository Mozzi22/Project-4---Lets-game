import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Hooks/useTheme';
import { StErrorSpan, StInput, StInputContainer, StLabel } from './styled';
import { IInput } from './types';

const Input: React.FC<IInput> = ({
    id,
    type = 'text',
    name,
    width,
    label,
    value,
    height,
    margin,
    onChange,
    maxLength,
    inputHeight,
    borderRadius,
    boxShadow,
    bgColor,
    padding,
    color,
    bgFocusColor,
    fontSizeInp,
    borderColor,
    placeholder,
    errorMessage,
}) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    const handleOnchange = (e :React.ChangeEvent<HTMLInputElement>) => {
        onChange({ name: e.target.name, value: e.target.value });
    };
    return (
        <StInputContainer width={width} height={height}>
            {!!label && <StLabel htmlFor={id}></StLabel>}
            <StInput
                id={id}
                name={name}
                type={type}
                value={value}
                margin={margin}
                color={color}
                onChange={handleOnchange}
                maxLength={maxLength}
                borderRadius={borderRadius}
                boxShadow={boxShadow}
                inputHeight={inputHeight}
                placeholder={t(placeholder)}
                bgColor={bgColor}
                padding={padding}
                borderColor={borderColor}
                fontSizeInp={fontSizeInp}
                bgFocusColor={bgFocusColor}
                theme={theme}
                colors={colors}
            />
            {!!errorMessage && <StErrorSpan>{errorMessage}</StErrorSpan>}
        </StInputContainer>
    );
};

export default Input;
