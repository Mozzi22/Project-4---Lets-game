import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from 'src/Store/types';
import { setLoginValue, sendLoginRequest, setValue } from 'src/Store/login/actions';
import { loginStore, getUserLogin } from 'src/Store/login/selectors';
import { TLoginValue, TLoginRequest } from 'src/Store/login/types';
import Login from './Login';

const mapStateToProps = (state: ApplicationState) => ({
    fields: loginStore(state),
    userLogin: getUserLogin(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLoginValue: (payload: TLoginValue) => dispatch(setLoginValue(payload)),
    sendLoginRequest: (payload: TLoginRequest) => dispatch(sendLoginRequest(payload)),
    setValue: (payload: TLoginValue) => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
