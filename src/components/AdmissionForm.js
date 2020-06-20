import React from 'react';
import { Form } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const AdmissionForm = ({ tickets, ticketId, editTicket }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);
  const setAttendingHospitalStaff = withEvent(caseId => editTicket({ ...ticket, attendingHospitalStaff }));
  const setOnDutyDoctor = withEvent(stage => editTicket({ ...ticket, onDutyDoctor }));
  const setNoOfWardBeds = withEvent(createdBy => editTicket({ ...ticket, noOfWardBeds }));
  const setIntensiveCareUnitBeds = withEvent(closedBy => editTicket({ ...ticket, intensiveCareUnitBeds }));

  return (
    <Form>
      <h3>Test Result Form</h3>
      <FormRow>
        <Field label="Attending hospital staff in PPE gear" value={ticket.attendingHospitalStaff} onChange={setAttendingHospitalStaff} />
        <Field label="On duty Doctor" value={ticket.onDutyDoctor} onChange={setOnDutyDoctor} />
      </FormRow>
      <FormRow>
        <Field label="Num of COVID/isolation ward beds" type="number" value={ticket.noOfWardBeds} onChange={setNoOfWardBeds} />
        <Field label="intensive care unit beds for COVID patients" type="number" value={ticket.intensiveCareUnitBeds} onChange={setIntensiveCareUnitBeds} />
      </FormRow>
    </Form>
  )
};

export default AdmissionForm;
