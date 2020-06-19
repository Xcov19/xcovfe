import React from 'react';
import { Form } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const SuspectedCaseForm = ({ tickets, ticketId, editTicket }) => {
  const ticket = tickets.find(({ id }) => ticketId === id);
  const withEvent = method => event => method(event.target.value);
  const setCaseId = withEvent(caseId => editTicket({...ticket, caseId}));
  const setStage = withEvent(stage => editTicket({...ticket, stage}));
  const setCreatedBy = withEvent(createdBy => editTicket({...ticket, createdBy}));
  const setClosedBy = withEvent(closedBy => editTicket({...ticket, closedBy}));
  return (
    <Form>
      <h3>Agent Roster assignments</h3>
      <FormRow>
        <Field label="Case ID" value={ticket.caseId} onChange={setCaseId}/>
        <Select label="Case Stage" options={stageNames} value={ticket.stage} onChange={setStage}/>
      </FormRow>
      <FormRow>
        <Field label="Created By" value={ticket.createdBy} onChange={setCreatedBy}/>
        <Field label="Closed By" value={ticket.closedBy} onChange={setClosedBy}/>
      </FormRow>

      <h3>Patient Details</h3>
      <FormRow>
        <Field label="Name"/>
        <Field label="age" type="number"/>
      </FormRow>
      <FormRow>
        <Field label="Residential Status"/>
        <Field label="Address"/>
      </FormRow>
      <FormRow>
        <Field label="Contact Number"/>
        <Field label="Address"/>
      </FormRow>
      <FormRow>
        <Field label="Temperature" type="number"/>
        <Field label="Date of Birth" type="date"/>
      </FormRow>
      <FormRow>
        <MultipleFields label="Co-existing diseases"/>
        <MultipleFields label="History of contact"/>
      </FormRow>
      <FormRow>
        <MultipleFields label="Travel history"/>
      </FormRow>
    </Form>
  )
};

export default SuspectedCaseForm;
