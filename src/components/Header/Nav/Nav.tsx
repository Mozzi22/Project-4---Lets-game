import React from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import Link from 'src/components/UI/Link';
import { LINKS } from 'src/constants/componentsСonsts';
import { StNav } from './styled';

const Nav = ({ history }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();

    const goToGames = () => {
        const { pathname } = history.location;
        history.push('/main');
    };
    const goToStats = () => {
        const { pathname } = history.location;
        history.push('/statistics');
    };

    if (history.location.pathname === '/') return null;
    if (history.location.pathname === '/registration') return null;
    return (
        <StNav theme={theme} colors={colors} >
            <img src="/public/assets/images/game-logo.svg" />
            <Link
                        theme={theme}
                        colors={colors}
                        content={t('main_page')}
                        width='110px'
                        fontSize='18px'
                        backgroundSize='0'
                        padding='0'
                        margin='0'
                        bgColor='transparent'
                        onClick={goToGames}
                    />
                    <Link
                        theme={theme}
                        colors={colors}
                        content={t('statistics')}
                        width='110px'
                        fontSize='18px'
                        backgroundSize='0'
                        padding='0'
                        margin='0'
                        bgColor='transparent'
                        onClick={goToStats}
                    />
        </StNav>
    );
};

export default withRouter(Nav);
