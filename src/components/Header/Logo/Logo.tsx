import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import Button from 'src/components/UI/Button';
import { StLogo } from './styled';

const Logo = ({ history }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();

    const goToMain = () => {
        const { pathname } = history.location;
        history.push('/main');
    };
    const goToStats = () => {
        const { pathname } = history.location;
        history.push('/statistics');
    };

    return (
        <StLogo
            theme={theme}
            colors={colors}
        >
            <img src="/public/assets/images/game-logo.svg" onClick={goToMain} />
            <Button
                content={t('main_page')}
                width="110px"
                fontSize='18px'
                backgroundSize="0"
                padding="0"
                margin="0"
                bgColor="transparent"
                onClick={goToMain}
            />
                <Button
                    content={t('statistics')}
                    width="110px"
                    fontSize='18px'
                    backgroundSize="0"
                    padding="0"
                    margin="0"
                    bgColor="transparent"
                    onClick={goToStats}
                />
        </StLogo>
    );
};

export default Logo;
