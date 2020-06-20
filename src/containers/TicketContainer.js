import { connect } from 'react-redux';
import Ticket from "../pages/Ticket";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({

});

const TicketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ticket);

export default TicketContainer;
