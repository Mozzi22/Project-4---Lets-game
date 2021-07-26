import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SingleSell from './SingleSell';
import { getTicStatus, getPossibleStepPosition } from 'src/Store/games/selectors';
import { ApplicationState } from 'src/Store/types';
import { getPosibleStep, doCheckerStep } from 'src/Store/games/actions';

const mapStateToProps = (store: ApplicationState, props) => ({
    status: getTicStatus(store, props.id),
    position: getPossibleStepPosition(store, props.id),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPosibleStep: (payload: string) => dispatch(getPosibleStep(payload)),
    doCheckerStep: (payload: string) => dispatch(doCheckerStep(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleSell);
