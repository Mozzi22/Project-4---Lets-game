import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { changeModalVisibility } from 'src/Store/modals/actions';
import { getModalVisibilityIsOpen } from 'src/Store/modals/selectors';
import ModalComponent from './ModalComponent';
import { TModalData } from 'src/Store/modals/types';
import { AplicationState } from 'src/Store/types';

const mapStateToProps = (state: AplicationState, ownProps) => ({
    isOpen: getModalVisibilityIsOpen(state, ownProps),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeModalVisibility: (payload: TModalData) => dispatch(changeModalVisibility(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
