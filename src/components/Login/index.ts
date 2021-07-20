import { connect } from 'react-redux';
import { setLoginValue, sendLoginRequest, setValue } from 'src/Store/login/actions';
import { loginStore } from 'src/Store/login/selectors';
import Login from './Login';

const mapStateToProps = state => ({ fields: loginStore(state) });

const mapDispatchToProps = dispatch => ({
    setLoginValue: payload => dispatch(setLoginValue(payload)),
    sendLoginRequest: (payload) => dispatch(sendLoginRequest(payload)),
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
