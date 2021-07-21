import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { changeModalVisibility } from 'src/Store/modals/actions';
import CreateRoomsView from './CreateRoomsView';
import { TModalData } from 'src/Store/modals/types';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeModalVisibility: (payload: TModalData) => dispatch(changeModalVisibility(payload)),
});

export default connect(null, mapDispatchToProps)(CreateRoomsView);
