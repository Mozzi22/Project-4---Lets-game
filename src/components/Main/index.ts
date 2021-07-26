import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getSockJSConnection, disconnect } from 'src/Store/games/actions';
import Main from './Main';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSockJSConnection: () => dispatch(getSockJSConnection()),
    disconnect: () => dispatch(disconnect()),
});

export default connect(null, mapDispatchToProps)(Main);
