import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { regInputs } from '../../constants/componentsСonsts';
import { APP_ROUTES } from '../../constants/reactRoutes';
import { TInitialRegistrationData, TRegistrationData } from '../../Store/registration/types';
import { StRegDiv } from './styled';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';

interface IRegistration {
    sendRegistrationRequest: (e: React.MouseEvent) => void ;
    setRegistrationValue: (data: TRegistrationData) => void ;
    fields: TInitialRegistrationData;
}

const Registration = ({ sendRegistrationRequest, setRegistrationValue, fields }: IRegistration) => {
    const { t } = useTranslation();
    const { success } = fields;
    if (success) return <Redirect to={APP_ROUTES.login} />;
    const handleOnChange = (data: TRegistrationData) => {
        const { error } = fields;
        if (error) setRegistrationValue({ name: 'error', value: null });
        setRegistrationValue(data);
    };
    return (
        <StRegDiv>
            <Form>
                <img src="./public/assets/images/sign-logo.svg" alt='sign in' />
                <p>{t('registration')}</p>
                {regInputs.map(input => (
                    <Input
                        id={input.id}
                        key={input.id}
                        name={input.id}
                        label={t(input.label)}
                        value={fields[input.id]}
                        width="400px"
                        height="100%"
                        padding="17px 10px"
                        margin="0 0 20px"
                        inputHeight="60px"
                        border="0px"
                        borderRadius="7px"
                        color="#484b54"
                        fontSizeInp="18px"
                        onChange={handleOnChange}
                        placeholder={t(input.placeholder)}
                    />
                ))}
                <Button
                    height="50px"
                    content="reg_btn"
                    id="registration"
                    onClick={sendRegistrationRequest}
                    backgroundSize='0'
                />
                <span>
                    {t('reg_span_text')}
                    <NavLink to={APP_ROUTES.login}>{t('reg_link_text')}</NavLink>
                </span>
            </Form>
        </StRegDiv>
    );
};

export default Registration;
