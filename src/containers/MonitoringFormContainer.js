import { connect } from 'react-redux';
import MonitoringForm from "../components/MonitoringForm";
import { editTicket } from "../actions/tickets";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({
  editTicket: (...args) => dispatch(editTicket(...args)),
});

const MonitoringFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonitoringForm);

export default MonitoringFormContainer;
