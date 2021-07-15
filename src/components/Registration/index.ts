import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AplicationState } from 'src/Store/types';
import { setRegistrationValue, sendRegistrationRequest } from 'src/Store/registration/actions';
import { registrationStore } from 'src/Store/registration/selectors';
import { TRegistrationData } from 'src/Store/registration/types';
import Registration from './Registration';

const mapStateToProps = (state: AplicationState) => ({ fields: registrationStore(state) });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setRegistrationValue: (payload: TRegistrationData) => dispatch(setRegistrationValue(payload)),
    sendRegistrationRequest: () => dispatch(sendRegistrationRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
