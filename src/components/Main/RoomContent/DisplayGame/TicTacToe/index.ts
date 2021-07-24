import { connect } from 'react-redux';
import { getTicTacToeDesk } from 'src/Store/games/selectors';
import { AplicationState } from 'src/Store/types';
import TicTacToe from './TicTacToe';

const mapStateToProps = (state: AplicationState) => ({
    ticTacToe: getTicTacToeDesk(state),
});

export default connect(mapStateToProps)(TicTacToe);
