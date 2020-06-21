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
      <Form>
        <h3>Incase of Recovery Prerequisites:</h3>
        <FormRow>
          <Field label="Negative covid report on two occasions" type="checkbox" />
          <Field label="Normal vitals/Normal blood reports" type="checkbox" />
        </FormRow>
        <FormRow>
          <Field label="Last 2 Covid Reports" />
          <Field label="Last blood Report" />
        </FormRow>
        <FormRow>
          <Field label="Active nursing details" />
          <Field label="Paramedical staff" />
        </FormRow>
        <FormRow>
          <Field label="Periodic Covid Report" />
        </FormRow>
      </Form>

      <Form>
        <h3>Incase of Death:</h3>
        <FormRow>
          <Field label="Authorities informed" type="checkbox" />
          <Field label="Family informed" type="checkbox" />
        </FormRow>
        <FormRow>
          <Field label="Autopsy done" />
          <Field label="Autopsy details record(?)" />
        </FormRow>
      </Form>
    </React.Fragment>
  )
};

export default AdmissionForm;
