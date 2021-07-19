import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import Link from 'src/components/UI/Link';
import { LINKS } from 'src/constants/componentsСonsts';
import { StNav } from './styled';

const Nav = () => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();

    return (
        <StNav theme={theme} colors={colors} >
            <img src="/public/assets/images/game-logo.svg" />
            {LINKS.map((el) => {
                if (location.pathname === '/') return null;
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
            })}
        </StNav>
    );
};

export default Nav;
