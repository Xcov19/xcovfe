import { connect } from 'react-redux';
import Dashboard from '../pages/Dashboard';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // action: (data) => {
    //   dispatch(action(data));
    // },
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
