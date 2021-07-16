import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { regInputs } from 'src/constants/componentsСonsts';
import { APP_ROUTES } from 'src/constants/reactRoutes';
import { TInitialRegistrationData, TRegistrationData } from 'src/Store/registration/types';
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
                        width="80%"
                        id={input.id}
                        height="100px"
                        key={input.id}
                        name={input.id}
                        inputHeight="50px"
                        borderRadius="5px"
                        label={t(input.label)}
                        value={fields[input.id]}
                        onChange={handleOnChange}
                        placeholder={t(input.placeholder)}
                    />
                ))}
                <Button
                    height="50px"
                    content="reg_btn"
                    id="registration"
                    onClick={sendRegistrationRequest}
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
