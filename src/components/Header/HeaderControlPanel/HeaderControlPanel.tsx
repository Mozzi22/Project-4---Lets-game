import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/UI/Button';
import Select from 'src/components/UI/Select';
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
}: IHeaderControlPanel) => {
    const { t, i18n } = useTranslation();
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

    const toggleThemeMode = () => changeTheme(theme === 'dark' ? 'light' : 'dark');

    return (
        <StControl>
            <Button
                fontSize='26px'
                width='40px'
                height="40px"
                margin='0 15px 0'
                borderRadius='0px'
                onClick={toggleThemeMode}
                bgColor='transparent'
                backgroundSize='cover'
            />
            <Select
                id={options.id}
                options={options}
                onChange={handleChangeLanguage}
                value={selected}
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
