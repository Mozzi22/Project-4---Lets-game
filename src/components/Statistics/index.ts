import { connect } from "react-redux";
import { ApplicationState } from 'src/Store/types';
import { getStatistics } from "src/Store/games/actions";
import { getStatisticsList } from "src/Store/games/selectors";
import Statistics from './Statistics';

const mapStateToProps = (state: ApplicationState) => ({
  statistics: getStatisticsList(state),
});

const mapDispatchToProps = { getStatistics };

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);