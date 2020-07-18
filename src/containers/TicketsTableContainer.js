import { connect } from 'react-redux';
import TicketsTable from "../components/TicketsTable";

const mapStateToProps = (state) => ({
  tickets: state.tickets || [],
});

const mapDispatchToProps = (dispatch) => ({

});

const TicketsTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsTable);

export default TicketsTableContainer;
