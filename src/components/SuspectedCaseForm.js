import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const SuspectedCaseForm = ({ tickets, ticketId, editTicket, closeModal }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);
  const setCaseId = withEvent(caseId => editTicket({ ...ticket, caseId }));
  const setStage = withEvent(stage => editTicket({ ...ticket, stage }));
  const setCreatedBy = withEvent(createdBy => editTicket({ ...ticket, createdBy }));
  const setPatientName = withEvent(patientName => editTicket({ ...ticket, patientName }));
  const setPatientAge = withEvent(patientAge => editTicket({ ...ticket, patientAge }));
  const setPatientResidentialStatus = withEvent(patientResidentialStatus => editTicket({ ...ticket, patientResidentialStatus }));
  const setPatientAddress = withEvent(patientAddress => editTicket({ ...ticket, patientAddress }));
  const setPatientContactNumber = withEvent(patientContactNumber => editTicket({ ...ticket, patientContactNumber }));
  const setPatientAddress2 = withEvent(patientAddress2 => editTicket({ ...ticket, patientAddress2 }));
  const setTemperature = withEvent(temperature => editTicket({ ...ticket, temperature }));
  const setPatientDOB = withEvent(patientDOB => editTicket({ ...ticket, patientDOB }));
  const setCoexistingDiseases = withEvent(coexistingDiseases => editTicket({ ...ticket, coexistingDiseases }));
  const setHistoryOfContact = withEvent(historyOfContact => editTicket({ ...ticket, historyOfContact }));
  const setTravelHistory = withEvent(travelHistory => editTicket({ ...ticket, travelHistory }));

  const submit = () => {
    editTicket({ ...ticket, stage: 'open_case_suspect' })
    let flag = Math.floor(Math.random() * 2) + 1; // 1 or 2
    editTicket({ ...ticket, showStageButton: flag })
    
    if(closeModal) {      
      closeModal()
    }

  }

  return (
    <Form>
      <h3>Agent Roster assignments</h3>
      <FormRow>
        <Field label="Case ID" value={ticket.caseId} onChange={setCaseId} />
        {/* <Select label="Case Stage" options={stageNames} value={ticket.stage} onChange={setStage} /> */}
      </FormRow>
      <FormRow>
        <Field label="Created By" value={ticket.createdBy} onChange={setCreatedBy} />
      </FormRow>

      <h3>Patient Details</h3>
      <FormRow>
        <Field label="Name" value={ticket.patientName} onChange={setPatientName} />
        <Field label="Age" type="number" value={ticket.patientAge} onChange={setPatientAge} />
      </FormRow>
      <FormRow>
        <Field label="Residential Status" value={ticket.patientResidentialStatus} onChange={setPatientResidentialStatus} />
        <Field label="Address" value={ticket.patientAddress} onChange={setPatientAddress} />
      </FormRow>
      <FormRow>
        <Field label="Contact Number" value={ticket.patientContactNumber} onChange={setPatientContactNumber} />
        <Field label="Address" value={ticket.patientAddress2} onChange={setPatientAddress2} />
      </FormRow>
      <FormRow>
        <Field label="Temperature" type="number" value={ticket.temperature} onChange={setTemperature} />
        <Field label="Date of Birth" type="date" value={ticket.patientDOB} onChange={setPatientDOB} />
      </FormRow>
      <FormRow>
        <Field label="Co-existing diseases" value={ticket.coexistingDiseases} onChange={setCoexistingDiseases} />
        <Field label="History of contact" value={ticket.historyOfContact} onChange={setHistoryOfContact} />
      </FormRow>
      <FormRow>
        <Field label="Travel history" value={ticket.travelHistory} onChange={setTravelHistory} />
      </FormRow>
      <FormRow>
        <Button onClick={submit}>Submit</Button>
      </FormRow>
    </Form>
  )
};

export default SuspectedCaseForm;
