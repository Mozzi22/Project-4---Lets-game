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
            {/* {LINKS.map((el) => {
                if (history.location.pathname === '/') return null;
                return (
                    <Link
                        theme={theme}
                        colors={colors}
                        id={el.id}
                        key={el.id}
                        content={t(el.content)}
                        width='110px'
                        fontSize='18px'
                        backgroundSize='0'
                        padding='0'
                        margin='0'
                        bgColor='transparent'
                        onClick={el.goToPage}
                    />
                );
            })} */}
        </StNav>
    );
};

export default withRouter(Nav);
