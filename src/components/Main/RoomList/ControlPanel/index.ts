import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { changeModalVisibility } from 'src/Store/modals/actions';
import ControlPanel from './ControlPanel';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
})

export default connect(null, mapDispatchToProps)(ControlPanel);
