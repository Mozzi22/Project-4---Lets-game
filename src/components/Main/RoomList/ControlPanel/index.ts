
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setRooms } from 'src/Store/games/actions';
import { TRoom } from 'src/Store/games/types';
import ControlPanel from './ControlPanel';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setRooms: (payload: TRoom) => dispatch(setRooms(payload))
})

export default connect(null, mapDispatchToProps)(ControlPanel);
