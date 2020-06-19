import { ADD_TICKET, EDIT_TICKET } from "../actions/tickets";
import TICKETS from '../data/tickets';
const toObj = v => v && JSON.parse(v);
const toStr = v => v && JSON.stringify(v);
const TICKETS_KEY = 'tickets__0001';
const getTickets = () => toObj(localStorage.getItem(TICKETS_KEY)) || TICKETS;
const setTickets = state => localStorage.setItem(TICKETS_KEY, toStr(state)) || state;
const tickets = (state = getTickets(), action) => {
    const addAction = action => [...state, {...action.ticket }];
    const editAction = v => state.filter(
      ticket => ticket.id !== v.ticket.id ? ticket : v.ticket
    ) || state.map(
      ticket => ticket.id !== v.ticket.id ? ticket : v.ticket
    );

    console.log("--");
    console.log(state);
    console.log(action);
    console.log(action && action.ticket && editAction(action));
    console.log("--");

    switch (action.type) {
        case ADD_TICKET: return addAction(action);
        case EDIT_TICKET: return editAction(action);
        default: return state
    }
};

export default (state, action) => setTickets(tickets(state, action));
