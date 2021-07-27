import React from 'react';
import { useTranslation } from 'react-i18next';
import { StWelcome } from './styled';
import { useTheme } from 'src/components/Hooks/useTheme';

const Welcome = ({ userLogin }) => {
    const { t } = useTranslation();
const { colors, theme } = useTheme();
    return (
        <StWelcome  theme={theme} colors={colors}>
             {t('welcome')}
                        {' '}
                       <h2>{userLogin}</h2>
                        {''}
                        <span>{t('find_interlocutors')}</span>
            </StWelcome>
    );
}
export default Welcome;