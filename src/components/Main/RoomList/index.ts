import { getUserLogin } from 'src/Store/login/selectors';
import RoomList from './RoomList';
import { connect } from 'react-redux';
import { ApplicationState } from 'src/Store/types';
import { getRooms } from 'src/store/games/selectors';

const mapStateToProps = (state: ApplicationState) => ({
    rooms: getRooms(state),
    userLogin: getUserLogin(state)
});

export default connect(mapStateToProps)(RoomList);
