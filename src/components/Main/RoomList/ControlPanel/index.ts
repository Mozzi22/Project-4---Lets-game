import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setValueSearch } from 'src/Store/games/actions';
import { getFilterByRoomName } from 'src/store/games/selectors';
import { changeModalVisibility } from 'src/Store/modals/actions';
import ControlPanel from './ControlPanel';

const mapStateToProps = (state) => ({
  filterByRoomName: getFilterByRoomName(state),
});
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setValueSearch: payload => dispatch(setValueSearch(payload)),
  changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
