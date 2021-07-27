import { connect } from 'react-redux';
import { getUserLogin } from 'src/store/games/selectors';
import Welcome from './Welcome';

const mapStateToProps = state => ({
    userLogin: getUserLogin(state),
    
});

export default connect(mapStateToProps)(Welcome);
