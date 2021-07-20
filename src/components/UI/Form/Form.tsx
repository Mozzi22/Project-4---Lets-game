import React from 'react';
import { useTheme } from '../../Hooks/useTheme';
import { StFormDiv } from './styled';
import { IForm } from './types';

const Form: React.FC<IForm> = ({ children }) => {
const { colors, theme } = useTheme();
      return (
        <StFormDiv
          theme={theme}
          colors={colors}
        >
          {children}
        </StFormDiv>
    );
};

export default Form;
