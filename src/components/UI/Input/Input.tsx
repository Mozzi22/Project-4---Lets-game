import React from 'react';
import { useTranslation } from 'react-i18next';
import { StErrorSpan, StInput, StInputContainer, StLabel } from './styled';

interface IInput{
    id: number | string;
    type: string;
    name: string;
    width: string;
    label?: string;
    value: string;
    height: string;
    margin: string;
    onChange: (value: { name: string; value: string }) => void;
    maxLength: string;
    inputHeight: string;
    borderRadius: string;
    bgColor: string;
    padding: string;
    color: string;
    bgFocusColor?: string;
    fontSizeInp?: string;
    borderColor?: string;
    placeholder?: string;
    errorMessage?: string;
}

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
    const handleOnchange = (e :React.ChangeEvent<HTMLInputElement>) => {
        onChange({ name: e.target.name, value: e.target.value });
    };
    return (
        <StInputContainer width={width} height={height}>
            {!!label && <StLabel htmlFor={id}>{label}</StLabel>}
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
                inputHeight={inputHeight}
                placeholder={t(placeholder)}
                bgColor={bgColor}
                padding={padding}
                borderColor={borderColor}
                fontSizeInp={fontSizeInp}
                bgFocusColor={bgFocusColor}
            />
            {!!errorMessage && <StErrorSpan>{errorMessage}</StErrorSpan>}
        </StInputContainer>
    );
};

export default Input;
