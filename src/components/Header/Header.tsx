import React from 'react';
import { useTheme } from 'src/components/Hooks/useTheme';
import { StHeader } from './styled';
import Logo from './Logo';
import HeaderControlPanel from './HeaderControlPanel';

const Header = () => {
    const { colors, theme } = useTheme();
    return (
        <StHeader
            theme={theme}
            colors={colors}
        >
            <Logo />
            <HeaderControlPanel />
        </StHeader >
    );
};

export default Header;
