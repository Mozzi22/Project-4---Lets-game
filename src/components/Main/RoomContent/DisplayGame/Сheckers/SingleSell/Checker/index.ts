import { connect } from 'react-redux';
import { getCurrentChecker } from 'src/Store/games/selectors';
import { setCurrentChecker } from 'src/Store/games/actions';
import { AplicationState } from 'src/Store/types';
import Checker from './Checker';
import { Dispatch } from 'redux';
import { TCurrentChecker } from 'src/Store/games/types';

const mapStateToProps = (state: AplicationState) => ({
  currentChecker: getCurrentChecker(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentChecker: (payload: TCurrentChecker) => dispatch(setCurrentChecker(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Checker);
