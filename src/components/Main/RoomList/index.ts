import RoomList from './RoomList';
import { connect } from 'react-redux';
import { AplicationState } from 'src/Store/types';
import { getRooms } from 'src/store/game/selectors';

const mapStateToProps = (state: AplicationState) => ({
    rooms: getRooms(state),
});

export default connect(mapStateToProps)(RoomList);
