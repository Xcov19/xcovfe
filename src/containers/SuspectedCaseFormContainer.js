import { connect } from 'react-redux';
import SuspectedCaseForm from "../components/SuspectedCaseForm";
import { editTicket } from "../actions/tickets";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({
  editTicket: (...args) => dispatch(editTicket(...args)),
});

const SuspectedCaseFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuspectedCaseForm);

export default SuspectedCaseFormContainer;
