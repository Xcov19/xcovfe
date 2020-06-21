import { connect } from 'react-redux';
import Ticket from "../pages/Ticket";
import { editTicket } from "../actions/tickets";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({
  editTicket: (...args) => dispatch(editTicket(...args)),
});

const TicketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ticket);

export default TicketContainer;
