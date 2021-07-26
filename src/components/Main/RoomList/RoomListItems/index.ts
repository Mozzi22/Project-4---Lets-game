import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { joinRoom, playWithBot, subscribeRoom} from 'src/Store/games/actions';
import RoomListItems from './RoomListItems';

const mapDispatchToProps = (dispatch:Dispatch) => ({
    joinRoom: (payload) => dispatch(joinRoom(payload)),
    subscribeRoom: (payload) => dispatch(subscribeRoom(payload)),
    playWithBot: (payload) => dispatch(playWithBot(payload)),
});

export default connect(null, mapDispatchToProps)(RoomListItems);
