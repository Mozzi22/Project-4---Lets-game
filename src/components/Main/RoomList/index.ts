import RoomList from './RoomList';
import { connect } from 'react-redux';
import { ApplicationState } from 'src/Store/types';
import { getRooms, getUserLogin } from 'src/Store/games/selectors';

const mapStateToProps = (state: ApplicationState) => ({
    rooms: getRooms(state),
    userLogin: getUserLogin(state)
});

export default connect(mapStateToProps)(RoomList);
