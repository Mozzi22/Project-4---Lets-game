import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { changeModalVisibility } from 'src/Store/modals/actions';
import { setRooms } from 'src/Store/games/actions';
import { TRoom } from 'src/Store/games/types';
import ControlPanel from './ControlPanel';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
  setRooms: (payload: TRoom) => dispatch(setRooms(payload))
})

export default connect(null, mapDispatchToProps)(ControlPanel);
