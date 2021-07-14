import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AplicationState } from 'src/Store/types';
import Registration from './Registration';
import { setRegistrationValue, sendRegistrationRequest } from '../../Store/registration/actions';
import { registrationStore } from '../../Store/registration/selectors';
import { TRegistrationData } from '../../Store/registration/types';

const mapStateToProps = (state: AplicationState) => ({ fields: registrationStore(state) });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setRegistrationValue: (payload: TRegistrationData) => dispatch(setRegistrationValue(payload)),
    sendRegistrationRequest: () => dispatch(sendRegistrationRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
