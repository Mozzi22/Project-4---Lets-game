import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from 'src/Store/types';
import { loginStore } from 'src/Store/login/selectors';
import { setLoginValue, sendLoginRequest, setValue } from 'src/Store/login/actions';
import Login from './Login';

const mapStateToProps = (state: ApplicationState) => ({
    fields: loginStore(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLoginValue: payload => dispatch(setLoginValue(payload)),
    sendLoginRequest: () => dispatch(sendLoginRequest()),
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
