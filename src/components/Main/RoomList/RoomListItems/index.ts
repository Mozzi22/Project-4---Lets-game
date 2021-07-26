import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from 'src/Store/types';
import { getUserLogin } from 'src/Store/login/selectors';
import { setCurrentRoom, joinRoom, playWithBot } from 'src/Store/games/actions';
import RoomListItems from './RoomListItems';

const mapStateToProps = (state: ApplicationState) => ({
    userLogin: getUserLogin(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentRoom: (payload: string) => dispatch(setCurrentRoom(payload)),
  playWithBot: (payload: string) => dispatch(playWithBot(payload)),
  joinRoom: (payload) => dispatch(joinRoom(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomListItems);
