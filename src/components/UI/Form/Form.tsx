import React from 'react';
import { StFormDiv } from './styled';

interface IForm {
    children: React.ReactNode;
}

const Form : React.FC<IForm> = ({ children }) => <StFormDiv>{children}</StFormDiv>;

export default Form;
