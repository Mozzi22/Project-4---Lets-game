import { connect } from 'react-redux';
import { ApplicationState } from 'src/Store/types';
import { getCurrentRoomName } from 'src/Store/games/selectors';
import DisplayGame from './DisplayGame';

const mapStateToProps = (state: ApplicationState) => ({
    currentRoomName: getCurrentRoomName(state),
});

export default connect(mapStateToProps)(DisplayGame);
