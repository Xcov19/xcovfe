import { connect } from 'react-redux';
import Tickets from "../components/Tickets";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({

});

const TicketsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickets);

export default TicketsContainer;
