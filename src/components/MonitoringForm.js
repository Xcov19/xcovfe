import React from 'react';
import { Form } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const AdmissionForm = ({ tickets, ticketId, editTicket }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);

  const setRMDutyDoctor = withEvent(caseId => editTicket({ ...ticket, rmDutyDoctor }));
  const setVitalStats = withEvent(stage => editTicket({ ...ticket, vitalStats }));
  const setRoutineDailyTestsRecord = withEvent(createdBy => editTicket({ ...ticket, routineDailyTestsRecord }));
  const setDoctorRecordForDailyRounds = withEvent(closedBy => editTicket({ ...ticket, doctorRecordForDailyRounds }));
  const setActiveNursingDetails = withEvent(closedBy => editTicket({ ...ticket, activeNursingDetails }));
  const setParamedicalStaff = withEvent(closedBy => editTicket({ ...ticket, paramedicalStaff }));
  const setPeriodicCovidReport = withEvent(closedBy => editTicket({ ...ticket, periodicCovidReport }));

  return (
    <Form>
      <h3>Test Result Form</h3>
      <FormRow>
        <Field label="RM/On duty Doctor" value={ticket.rmDutyDoctor} onChange={setRMDutyDoctor} />
        <Field label="Vital Stats 8 hourly record" value={ticket.vitalStats} onChange={setVitalStats} />
      </FormRow>
      <FormRow>
        <Field label="Routine Daily tests record" value={ticket.routineDailyTestsRecord} onChange={setRoutineDailyTestsRecord} />
        <Field label="Doctor record for Daily rounds" value={ticket.doctorRecordForDailyRounds} onChange={setDoctorRecordForDailyRounds} />
      </FormRow>
      <FormRow>
        <Field label="Active nursing details" value={ticket.activeNursingDetails} onChange={setActiveNursingDetails} />
        <Field label="Paramedical staff" value={ticket.paramedicalStaff} onChange={setParamedicalStaff} />
      </FormRow>
      <FormRow>
        <Field label="Periodic Covid Report" value={ticket.periodicCovidReport} onChange={setPeriodicCovidReport} />
      </FormRow>
    </Form>
  )
};

export default AdmissionForm;
