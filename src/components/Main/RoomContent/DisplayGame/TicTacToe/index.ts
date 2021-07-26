// import { connect } from 'react-redux';
// import { getTicTacToeDesk } from 'src/Store/games/selectors';
// import { doStepTicTacToe } from 'src/Store/games/actions';
// import { ApplicationState } from 'src/Store/types';
// import TicTacToe from './TicTacToe';
// import { Dispatch } from 'redux';

// const mapStateToProps = (state: ApplicationState) => ({
//     ticTacToe: getTicTacToeDesk(state),
// });

// const mapDispatchToProps =  (dispatch: Dispatch) => ({
//     doStepTicTacToe: (payload: number) => dispatch(doStepTicTacToe(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
import TicTacToe from './TicTacToe';
export default TicTacToe;
