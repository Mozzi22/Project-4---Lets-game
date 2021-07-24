import RoomListItems from './RoomListItems';
import { AplicationState } from 'src/Store/types';
import { getUserLogin } from 'src/Store/login/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state: AplicationState) => ({
  userLogin: getUserLogin(state)
});

export default connect(mapStateToProps)(RoomListItems);
