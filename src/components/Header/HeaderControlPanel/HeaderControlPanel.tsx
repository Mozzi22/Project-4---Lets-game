import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { HEADER_CONTROL_BTNS } from 'src/constants/componentsСonsts';
import Button from 'src/components/UI/Button';
import Select from 'src/components/UI/Select';
import { APP_ROUTES } from 'src/constants/reactRoutes';
import { ROUTS_WITHOUT_MY_ACCOUNT } from 'src/constants/ui';
import { support } from 'src/helpers/support';
import { colorDefault } from 'src/components/UI/baseLayout';
import { Theme } from 'src/components/Hocs/withTheme';
import { StOption } from 'src/components/UI/Select/styled';
import { StControl } from './styled';

interface IHeaderControlPanel {
    themeMode: string;
}

const options = [
    { id: 1, label: 'en', value: 'en' },
    { id: 2, label: 'ru', value: 'ru' },
];

const HeaderControlPanel = ({
    authorization,
}: IHeaderControlPanel) => {
    const { t, i18n } = useTranslation();
    const { theme, changeTheme } = useContext(Theme);

    const onChangeTheme = (lng, i18n) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };

    const handleChangeTheme = e => onChangeTheme(e.target.value, i18n);

    const toggleThemeMode = () => {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <StControl>
            <Button
                color={colorDefault}
                fontSize='26px'
                width='40px'
                height="40px"
                margin='0 15px 0'
                borderRadius='0px'
                onClick={toggleThemeMode}
                bgColor='transparent'
                backgroundSize='cover'
            >
                {t(authorization)}
            </Button>
            <Select
                id={options.id}
                options={options}
                onChange={handleChangeTheme}
                width="70px"
                bgColor=""
            >
            {options.map(el => (
                <StOption
                    key={el.id}
                    id={el.id}
                    value={el.value}
                >
                    {el.label}
                </StOption>
                ))
            }
            </Select>
        </StControl>
    );
};

export default HeaderControlPanel;
