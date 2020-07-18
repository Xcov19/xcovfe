import { connect } from 'react-redux';
import CaseResolvedForm from "../components/CaseResolvedForm";
import { editTicket } from "../actions/tickets";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({
  editTicket: (...args) => dispatch(editTicket(...args)),
});

const CaseResolvedFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CaseResolvedForm);

export default CaseResolvedFormContainer;
