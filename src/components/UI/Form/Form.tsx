import React from 'react';
import { StFormDiv } from './styled';
import { IForm } from './types';

const Form : React.FC<IForm> = ({ children }) => <StFormDiv>{children}</StFormDiv>;

export default Form;
