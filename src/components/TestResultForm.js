import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const TestResultForm = ({ tickets, ticketId, editTicket, closeModal }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);
  const setPatientReport = withEvent(patientReport => editTicket({ ...ticket, patientReport }));
  const setPreExistingDisease = withEvent(preExistingDisease => editTicket({ ...ticket, preExistingDisease }));
  const setPatientBed = withEvent(patientBed => editTicket({ ...ticket, patientBed }));
  const setCaseHistory = withEvent(caseHistory => editTicket({ ...ticket, caseHistory }));
  const setSeverityAssessmentReport = withEvent(severityAssessmentReport => editTicket({ ...ticket, severityAssessmentReport }));

  const submit = () => {
    let flag = Math.floor(Math.random() * 2) + 1; // 1 or 2
    editTicket({ ...ticket, showStageButton: flag })
    closeModal()
  }
  

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
      <FormRow>
        <Button onClick={submit}>Submit</Button>
      </FormRow>
    </Form>
  )
};

export default TestResultForm;
