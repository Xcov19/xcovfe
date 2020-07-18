import { connect } from 'react-redux';
import CaseClosingForm from "../components/CaseClosingForm";
import { editTicket } from "../actions/tickets";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({
  editTicket: (...args) => dispatch(editTicket(...args)),
});

const CaseClosingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CaseClosingForm);

export default CaseClosingFormContainer;
