import { connect } from 'react-redux';
import AdmissionForm from "../components/AdmissionForm";
import { editTicket } from "../actions/tickets";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({
  editTicket: (...args) => dispatch(editTicket(...args)),
});

const AdmissionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdmissionForm);

export default AdmissionFormContainer;
