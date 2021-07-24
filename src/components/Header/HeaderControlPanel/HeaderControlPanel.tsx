import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/UI/Button';
import Select from 'src/components/UI/Select';
import { Theme } from 'src/components/Hocs/withTheme';
import { options } from 'src/constants/ui';
import { StControl } from './styled';

const HeaderControlPanel = () => {
    const { i18n } = useTranslation();
    const { theme, changeTheme } = useContext(Theme);
    const [selected, setSelected] = React.useState('');

    React.useEffect(() => {
        const lastSelected = localStorage.getItem('lang');
        setSelected(lastSelected);
    }, [localStorage.getItem('lang')]);

    const onChangeLanguage = (lng, i18n) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };

    const handleChangeLanguage = (e) => {
        onChangeLanguage(e.target.value, i18n);
    };

    const toggleThemeMode = () => changeTheme(
        theme === 'dark' ? 'light' : 'dark',
    );

    return (
        <StControl>
            <Button
                id='theme-btn'
                fontSize='26px'
                width='40px'
                height='40px'
                margin='0 15px 0'
                borderRadius='0px'
                onClick={toggleThemeMode}
                bgColor='transparent'
                backgroundSize='cover'
                hoverColor='transparent'
                bgColorDisabled='transparent'
            />
            <Select
                id={options.id}
                options={options}
                onChange={handleChangeLanguage}
                value={selected || ''}
                width='70px'
                bgColor='#b16fdd'
            />
        </StControl>
    );
};

export default HeaderControlPanel;
