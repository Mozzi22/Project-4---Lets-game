import RoomContent from './RoomContent';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getWinner } from 'src/Store/games/selectors';
import { cleanOldGame } from 'src/Store/games/actions';
import { ApplicationState } from 'src/Store/types';

const mapStateToProps = (store: ApplicationState) => ({ winner: getWinner(store) });
const mapDispatchToProps = (dispatch: Dispatch) => ({ cleanOldGame: () => dispatch(cleanOldGame()) });

export default connect(mapStateToProps, mapDispatchToProps)(RoomContent);
