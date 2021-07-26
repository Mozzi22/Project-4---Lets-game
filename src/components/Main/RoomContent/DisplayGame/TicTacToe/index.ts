import { connect } from 'react-redux';
import { getTicTacToeDesk } from 'src/Store/games/selectors';
import { do_step } from 'src/Store/games/actions';
// import { AplicationState } from 'src/Store/types';
import TicTacToe from './TicTacToe';

const mapStateToProps = (state) => ({
    ticTacToe: getTicTacToeDesk(state),
});

const mapDispatchToProps = {
  do_step,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
