import { connect } from 'react-redux';
import Registration from './Registration';
import { setRegistrationValue, sendRegistrationRequest } from '/src/Store/registration/actions';
import { registrationStore } from '/src/Store/registration/selectors';

const mapStateToProps = state => ({ fields: registrationStore(state) });

const mapDispatchToProps = dispatch => ({
    setRegistrationValue: payload => dispatch(setRegistrationValue(payload)),
    sendRegistrationRequest: payload => dispatch(sendRegistrationRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
