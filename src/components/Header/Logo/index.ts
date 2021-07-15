import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setValue } from 'src/Store/user/actions';
import Logo from './Logo';

const mapDispatchToProps = dispatch => ({ setValue: payload => dispatch(setValue(payload)) });

export default connect(null, mapDispatchToProps)(withRouter(Logo));
