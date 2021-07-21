import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AplicationState } from 'src/Store/types';
import { setLoginValue, sendLoginRequest, setValue } from 'src/Store/login/actions';
import { loginStore } from 'src/Store/login/selectors';
import { TLoginValue, TLoginRequest } from 'src/Store/login/types';
import Login from './Login';

const mapStateToProps = (state: AplicationState) => ({ fields: loginStore(state) });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLoginValue: (payload: TLoginValue) => dispatch(setLoginValue(payload)),
    sendLoginRequest: (payload: TLoginRequest) => dispatch(sendLoginRequest(payload)),
    setValue: (payload: TLoginValue) => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
