import { connect } from 'react-redux';
import { ApplicationState } from 'src/Store/types';
import { getCurrentRoom } from 'src/Store/games/selectors';
import DisplayGame from './DisplayGame';

const mapStateToProps = (state: ApplicationState) => ({
    currentRoomName: getCurrentRoom(state),
});

export default connect(mapStateToProps)(DisplayGame);
