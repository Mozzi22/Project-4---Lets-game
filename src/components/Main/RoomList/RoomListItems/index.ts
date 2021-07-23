import RoomListItems from './RoomListItems';
import { AplicationState } from 'src/Store/types';
import { getRooms, getLoginCreator } from 'src/Store/game/selectors';
import { getUserLogin } from 'src/Store/login/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state: AplicationState) => ({
  creator: getLoginCreator(state),
  userLogin: getUserLogin(state)
});

export default connect(mapStateToProps, null)(RoomListItems);

