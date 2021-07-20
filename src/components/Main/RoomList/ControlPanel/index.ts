import ControlPanel from './ControlPanel';
import { connect } from 'react-redux';
import { setRooms } from 'src/Store/games/actions';

const mapDispatchToProps = dispatch => ({
  setRooms: payload => dispatch(setRooms(payload))
})

export default connect(null, mapDispatchToProps)(ControlPanel);
