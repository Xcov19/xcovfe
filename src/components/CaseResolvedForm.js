import React from 'react';
import { Form } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const AdmissionForm = ({ tickets, ticketId, editTicket }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);
  const setCaseId = withEvent(caseId => editTicket({ ...ticket, caseId }));
  const setStage = withEvent(stage => editTicket({ ...ticket, stage }));
  const setCreatedBy = withEvent(createdBy => editTicket({ ...ticket, createdBy }));
  const setClosedBy = withEvent(closedBy => editTicket({ ...ticket, closedBy }));
  return (
    <React.Fragment>
      <button>Close</button>
    </React.Fragment>
  )
};

export default AdmissionForm;
