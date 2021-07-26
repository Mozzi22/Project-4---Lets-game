import { connect } from 'react-redux';
import { ApplicationState } from 'src/Store/types';
import { getActualRoomGameType } from 'src/Store/games/selectors';
import DisplayGame from './DisplayGame';

const mapStateToProps = store => ({ gameType: getActualRoomGameType(store) });

export default connect(mapStateToProps)(DisplayGame);
