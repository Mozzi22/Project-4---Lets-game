import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { initialWebSocket, disconnect } from 'src/Store/games/actions';
import Main from './Main';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    initialWebSocket: () => dispatch(initialWebSocket()),
    disconnect: () => dispatch(disconnect()),
});

export default connect(null, mapDispatchToProps)(Main);
