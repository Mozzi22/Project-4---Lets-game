// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
// import { ApplicationState } from 'src/Store/types';
// import { setLoginValue, sendLoginRequest, setValue } from 'src/Store/login/actions';
// import { loginStore, getUserLogin } from 'src/Store/login/selectors';
// // import { TLoginValue, TLoginRequest } from 'src/Store/login/types';
// import Login from './Login';

// const mapStateToProps = (state: ApplicationState) => ({
//     fields: loginStore(state),
//     userLogin: getUserLogin(state)
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     setLoginValue: (payload) => dispatch(setLoginValue(payload)),
//     sendLoginRequest: (payload) => dispatch(sendLoginRequest(payload)),
//     setValue: (payload) => dispatch(setValue(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

import { connect } from 'react-redux';

import { loginStore } from 'src/Store/login/selectors';
import { setLoginValue, sendLoginRequest, setValue } from 'src/Store/login/actions';
import Login from './Login';

const mapStateToProps = state => ({ fields: loginStore(state) });

const mapDispatchToProps = dispatch => ({
    setLoginValue: payload => dispatch(setLoginValue(payload)),
    sendLoginRequest: () => dispatch(sendLoginRequest()),
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
