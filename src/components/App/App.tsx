import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import Registration from '../Registration';
import Login from '../Login';
// import Component from '../UI/Modal/ModalTestComponent.jsx';
// import ModalComponent from '../UI/Modal';
import Header from '../Header';
import { APP_ROUTES } from '../../constants/reactRoutes';
import { StAppDiv } from './styled';
import ModalInviteUsers from '../UI/Modals/ModalInviteUsers';
import ModalCreateRoom from '../UI/Modals/ModalCreateRoom';

const App = () => {
  const { i18n } = useTranslation();
  const { colors, theme } = useTheme();
  return (
    <StAppDiv
      lang={i18n.language}
      theme={theme}
      colors={colors}
    >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={APP_ROUTES.login} exact component={Login} />
          <Route path={APP_ROUTES.registration} exact component={Registration} />
        </Switch>
      </BrowserRouter>
      {/* <ModalComponent
        Component={Component}
        headerTextKey="notification_settings"
      /> */}
      <ModalCreateRoom />
      <ModalInviteUsers />
      <NotificationContainer />
    </StAppDiv >
  );
};

export default App;
