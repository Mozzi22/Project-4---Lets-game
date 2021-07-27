import { getUserLogin } from 'src/Store/games/selectors';
import { connect } from "react-redux";
import { ApplicationState } from 'src/Store/types';
import { Dispatch } from 'react';
import { getStatistics } from "src/Store/games/actions";
import { getStatisticsList } from "src/Store/games/selectors";
import Statistics from './Statistics';

const mapStateToProps = (state: ApplicationState) => ({
  statistics: getStatisticsList(state),
  userLogin: getUserLogin(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getStatistics: () => dispatch(getStatistics()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);