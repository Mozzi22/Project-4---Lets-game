import { connect } from 'react-redux';
import ControlPanel from './ControlPanel';
import { changeModalVisibility } from 'src/Store/modals/actions';

const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(null, mapDispatchToProps)(ControlPanel);
