import { connect } from 'react-redux';
import { compose } from 'redux';
import { userTheme, userThemeMode } from 'src/Store/user/selectors';
import { withTheme } from '../Hocs/withTheme';
import App from './App';

const mapStateToProps = state => ({
  userTheme: userTheme(state),
  userThemeMode: userThemeMode(state),
});

export default compose(
  connect(mapStateToProps),
  withTheme,
)(App);
