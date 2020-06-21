import { connect } from 'react-redux';
import TestResultForm from "../components/TestResultForm";
import { editTicket } from "../actions/tickets";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({
  editTicket: (...args) => dispatch(editTicket(...args)),
});

const TestResultFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestResultForm);

export default TestResultFormContainer;
