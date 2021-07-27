import { connect } from 'react-redux';
import Turn from './Turn';
import { getStepOrderSelector, getUserLogin } from 'src/Store/games/selectors';

const mapStateToProps = store => ({
    turn: getStepOrderSelector(store),
    login: getUserLogin(store),
});

export default connect(mapStateToProps)(Turn);
