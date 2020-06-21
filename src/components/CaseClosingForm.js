import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const AdmissionForm = ({ tickets, ticketId, editTicket, closeModal }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);
  const setNegativeCovidReport = withEvent(negativeCovidReport => editTicket({ ...ticket, negativeCovidReport }));
  const setVitalsBloodReports = withEvent(vitalsBloodReports => editTicket({ ...ticket, vitalsBloodReports }));
  const setLastCovidReports = withEvent(lastCovidReports => editTicket({ ...ticket, lastCovidReports }));
  const setLastBloodReport = withEvent(lastBloodReport => editTicket({ ...ticket, lastBloodReport }));
  const setActiveNursingDetails = withEvent(activeNursingDetails => editTicket({ ...ticket, activeNursingDetails }));
  const setParamedicalStaff = withEvent(paramedicalStaff => editTicket({ ...ticket, paramedicalStaff }));
  const setPeriodicCovidReport = withEvent(periodicCovidReport => editTicket({ ...ticket, periodicCovidReport }));
  const setAuthoritiesInformed = withEvent(authoritiesInformed => editTicket({ ...ticket, authoritiesInformed }));
  const setFamilyInformed = withEvent(familyInformed => editTicket({ ...ticket, familyInformed }));
  const setAutopsyDone = withEvent(autopsyDone => editTicket({ ...ticket, autopsyDone }));
  const setAutopsyDetailsRecord = withEvent(autopsyDetailsRecord => editTicket({ ...ticket, autopsyDetailsRecord }));

  const submit = () => {
    closeModal()
  }

  return (
    <React.Fragment>
      <Form>
        <h3>Incase of Recovery Prerequisites:</h3>
        <FormRow>
          <Field label="Negative covid report on two occasions" type="checkbox" value={ticket.negativeCovidReport} onChange={setNegativeCovidReport} />
          <Field label="Normal vitals/Normal blood reports" type="checkbox" value={ticket.vitalsBloodReports} onChange={setVitalsBloodReports} />
        </FormRow>
        <FormRow>
          <Field label="Last 2 Covid Reports" value={ticket.lastCovidReports} onChange={setLastCovidReports} />
          <Field label="Last blood Report" value={ticket.lastBloodReport} onChange={setLastBloodReport} />
        </FormRow>
        <FormRow>
          <Field label="Active nursing details" value={ticket.activeNursingDetails} onChange={setActiveNursingDetails} />
          <Field label="Paramedical staff" value={ticket.paramedicalStaff} onChange={setParamedicalStaff} />
        </FormRow>
        <FormRow>
          <Field label="Periodic Covid Report" value={ticket.periodicCovidReport} onChange={setPeriodicCovidReport} />
        </FormRow>
        <FormRow>
          <Button onClick={submit}>Submit</Button>
        </FormRow>
      </Form>

      <Form>
        <h3>Incase of Death:</h3>
        <FormRow>
          <Field label="Authorities informed" type="checkbox" value={ticket.authoritiesInformed} onChange={setAuthoritiesInformed} />
          <Field label="Family informed" type="checkbox" value={ticket.familyInformed} onChange={setFamilyInformed} />
        </FormRow>
        <FormRow>
          <Field label="Autopsy done" value={ticket.autopsyDone} onChange={setAutopsyDone} />
          <Field label="Autopsy details record(?)" value={ticket.autopsyDetailsRecord} onChange={setAutopsyDetailsRecord} />
        </FormRow>
        <FormRow>
          <Button onClick={submit}>Submit</Button>
        </FormRow>
      </Form>
    </React.Fragment>
  )
};

export default AdmissionForm;
