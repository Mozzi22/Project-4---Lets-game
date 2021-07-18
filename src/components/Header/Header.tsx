import React from 'react';
import { useTheme } from 'src/components/Hooks/useTheme';
import { StHeader } from './styled';
import Nav from './Nav';
import HeaderControlPanel from './HeaderControlPanel';

const Header = () => {
    const { colors, theme } = useTheme();
    return (
        <StHeader
            theme={theme}
            colors={colors}
        >
            <Nav />
            <HeaderControlPanel />
        </StHeader >
    );
};

export default Header;
