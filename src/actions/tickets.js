export const ADD_TICKET = 'ADD_TICKET';
export const EDIT_TICKET = 'EDIT_TICKET';
let _id = 9999;
export const addTicket = ticket => ({
  type: ADD_TICKET,
  ticket: {
    ...ticket,
    name: `${ticket.hospital || 'hospital'} - ${ticket.template || 'covid-19'}`,
    id: ++_id,
    createdOn: new Date().toLocaleDateString(),
  },
});

export const editTicket = ticket => ({
  type: EDIT_TICKET,
  ticket: {
    ...ticket,
    lastUpdated: new Date().toLocaleDateString(),
  },
});
