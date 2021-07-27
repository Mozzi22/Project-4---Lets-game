import SingleSellNine from './SingleSellNine';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { doTicStep } from 'src/Store/games/actions';
import { getTicStatus } from 'src/Store/games/selectors';
import { ApplicationState } from 'src/Store/types';

const mapStateToProps = (store: ApplicationState, ownProps: any) => ({ status: getTicStatus(store, ownProps.id) });
const mapDispatchToProps = (dispatch : Dispatch) => ({ doStep: (payload: string) => dispatch(doTicStep(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(SingleSellNine);
