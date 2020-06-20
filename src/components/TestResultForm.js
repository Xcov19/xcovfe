import React from 'react';
import { Form } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const TestResultForm = ({ tickets, ticketId, editTicket }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);

  const setPatientReport = withEvent(caseId => editTicket({ ...ticket, patientReport }));
  const setPreExistingDisease = withEvent(stage => editTicket({ ...ticket, preExistingDisease }));
  const setPatientBed = withEvent(createdBy => editTicket({ ...ticket, patientBed }));
  const setCaseHistory = withEvent(closedBy => editTicket({ ...ticket, caseHistory }));
  const setSeverityAssessmentReport = withEvent(closedBy => editTicket({ ...ticket, severityAssessmentReport }));

  return (
    <Form>
      <h3>Test Result Form</h3>
      <FormRow>
        <Field label="Patient Report" type="file" value={ticket.patientReport} onChange={setPatientReport} />
        <Field label="Pre existing disease" value={ticket.preExistingDisease} onChange={setPreExistingDisease} />
      </FormRow>
      <FormRow>
        <Field label="Bed" value={ticket.patientBed} onChange={setPatientBed} />
        <Field label="Case history" value={ticket.caseHistory} onChange={setCaseHistory} />
      </FormRow>
      <FormRow>
        <Field label="Severity Assessment Report" value={ticket.severityAssessmentReport} onChange={setSeverityAssessmentReport} />
      </FormRow>
    </Form>
  )
};

export default TestResultForm;
