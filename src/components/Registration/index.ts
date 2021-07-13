import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TInitialRegistrationData } from 'src/Store/registration/types';
import Registration from './Registration';
import { setRegistrationValue, sendRegistrationRequest } from '../../Store/registration/actions';
import { registrationStore } from '../../Store/registration/selectors';

const mapStateToProps = (state: TInitialRegistrationData) => ({ fields: registrationStore(state) });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setRegistrationValue: (payload: string) => dispatch(setRegistrationValue(payload)),
    sendRegistrationRequest: (payload: string) => dispatch(sendRegistrationRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
