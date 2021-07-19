import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from 'src/constants/reactRoutes';
import { logInputs } from 'src/constants/componentsСonsts';
import Form from 'src/components/UI/Form';
import Input from 'src/components/UI/Input';
import Button from 'src/components/UI/Button';
import { TInitialLoginData, TLoginData, TLoginValue } from 'src/Store/login/types';
import { StLoginDiv } from './styled';

interface ILogin {
    sendLoginRequest: (e: React.MouseEvent) => void ;
    setLoginValue: (data: TLoginData) => void ;
    fields: TInitialLoginData;
    setValue: (data: TLoginValue) => void;
}

const Login = ({ sendLoginRequest, setLoginValue, fields, setValue }: ILogin) => {
  const { t } = useTranslation();
  if (fields.success) {
    setValue({ name: 'success', value: false });
    return <Redirect to={APP_ROUTES.main} />;
  }
  return (
    <StLoginDiv>
      <Form>
        <img src="./public/assets/images/sign-logo.svg" alt='sign in' />
        <p>{t('authorization')}</p>
        {logInputs.map(input => (
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
            onChange={setLoginValue}
            placeholder={t(input.placeholder)}
          />
        ))}
        <Button
          height="50px"
          content="login_btn"
          id="login"
          onClick={sendLoginRequest}
          backgroundSize='0'
        />
        <span>
          {t('login_span_text')}
          <NavLink to={APP_ROUTES.registration}>{t('login_link_text')}</NavLink>
        </span>
      </Form>
    </StLoginDiv>
  );
};

export default Login;
