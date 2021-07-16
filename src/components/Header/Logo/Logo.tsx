import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import { StLogo } from './styled';

const Logo = ({ history, setValue }) => {
    const { colors, theme } = useTheme();
    const handleClick = () => {
        const { pathname } = history.location;
        if (pathname === '/' || pathname === '/registration') return history.push('/');
        setValue({ name: 'init', value: true });
        history.push('/chat');
    };
    const { t } = useTranslation();
    return (
        <StLogo
            onClick={handleClick}
            theme={theme}
            colors={colors}
        >
            <img src="/public/assets/images/game-logo.svg" />
            <h1>{t('logo')}</h1>
        </StLogo>
    );
};

export default Logo;
