import { connect } from 'react-redux';
import ControlPanel from './ControlPanel';
// import { rooms } from '/src/Store/chat/selectors';
import { changeModalVisibility } from 'src/Store/modals/actions';

// const mapStateToProps = state => ({ rooms: rooms(state) });
const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(null, mapDispatchToProps)(ControlPanel);
