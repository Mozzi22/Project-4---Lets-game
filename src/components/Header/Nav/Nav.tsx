import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import Link from 'src/components/UI/Link';
import history from 'src/helpers/history';
import { StNav } from './styled';

const Nav = () => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();

    const goToMain = () => {
        history.push('/main');
    };
    const goToStats = () => {
        history.push('/statistics');
    };

    return (
        <StNav
            theme={theme}
            colors={colors}
        >
            <img src="/public/assets/images/game-logo.svg" onClick={goToMain} />
            <Link
                theme={theme}
                colors={colors}
                id='main-page-btn'
                content={t('main_page')}
                width='110px'
                fontSize='18px'
                backgroundSize='0'
                padding='0'
                margin='0'
                bgColor='transparent'
                onClick={goToMain}
            />
            <Link
                theme={theme}
                colors={colors}
                id='statistics-btn'
                content={t('statistics')}
                width="110px"
                fontSize='18px'
                backgroundSize="0"
                padding="0"
                margin="0"
                bgColor="transparent"
                onClick={goToStats}
            />
        </StNav>
    );
};

export default Nav;
