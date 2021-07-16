import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { HEADER_CONTROL_BTNS } from 'src/constants/componentsСonsts';
import Button from 'src/components/UI/Button';
import { APP_ROUTES } from 'src/constants/reactRoutes';
import { ROUTS_WITHOUT_MY_ACCOUNT } from 'src/constants/ui';
import { support } from 'src/helpers/support';
import { colorDefault } from 'src/components/UI/baseLayout';
import { Theme } from 'src/components/Hocs/withTheme';
import { StControl } from './styled';

interface IHeaderControlPanel {
    themeMode: string;
}

const HeaderControlPanel = ({
    themeMode,
    userNotifSettings,
    authorization,
}: IHeaderControlPanel) => {
    const { i18n } = useTranslation();
    const { theme, changeTheme } = useContext(Theme);

    const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
    };
    
//     const getFunctionForButtons = (el) => {
//     switch (el.id) {
//         case 'theme_btn': return handleThemeClick;
//         default: return handleChangeLanguage;
//     }
// };

  const toggleThemeMode = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const { t, i18 } = useTranslation();
    return (
        <StControl>
            {HEADER_CONTROL_BTNS.map((el) => {
                if (el.value === themeMode) return null;
                if (el.id === 'notif_btn' && Boolean(el.value) === userNotifSettings) return null;
                return (
                    <Button
                        id={el.id}
                        content={el.content}
                        key={el.id}
                        color={colorDefault}
                        fontSize='26px'
                        width='60px'
                        height="10vh"
                        borderRadius="0px"
                        value={el.value}
                        bgColor="transparent"
                        onClick={handleChangeLanguage}
                    >
                        {t(authorization)}
                    </Button>
                );
            })}
        </StControl>
    );
};

export default HeaderControlPanel;
