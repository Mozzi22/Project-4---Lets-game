import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/Hooks/useTheme';
import ModalCreateRoom from 'src/components/UI/Modals/ModalCreateRoom';
import Registration from '../Registration';
import Main from '../Main';
import Login from '../Login';
import Header from '../Header';
import Statistics from '../Statistics';
import { APP_ROUTES } from '../../constants/reactRoutes';
import { StAppDiv } from './styled';

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
          <Route path={APP_ROUTES.main} exact component={Main} />
          <Route path={APP_ROUTES.statistics} exact component={Statistics} />
        </Switch>
      </BrowserRouter>
      <ModalCreateRoom />
      <NotificationContainer />
    </StAppDiv >
  );
};

export default App;
