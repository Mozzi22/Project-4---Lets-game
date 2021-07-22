import { connect } from 'react-redux';
import { getCheckerDesk } from 'src/Store/games/selectors';
import { AplicationState } from 'src/Store/types';
import Checkers from './Checkers';

const mapStateToProps = (state: AplicationState) => ({
  checker: getCheckerDesk(state),
});

export default connect(mapStateToProps)(Checkers);
