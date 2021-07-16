import { compose } from 'redux';
import { withTheme } from '../Hocs/withTheme';
import App from './App';

export default compose(
  withTheme,
)(App);
