import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const AdmissionForm = ({ tickets, ticketId, editTicket, closeModal }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);
  const setAttendingHospitalStaff = withEvent(attendingHospitalStaff => editTicket({ ...ticket, attendingHospitalStaff }));
  const setOnDutyDoctor = withEvent(onDutyDoctor => editTicket({ ...ticket, onDutyDoctor }));
  const setNoOfWardBeds = withEvent(noOfWardBeds => editTicket({ ...ticket, noOfWardBeds }));
  const setIntensiveCareUnitBeds = withEvent(intensiveCareUnitBeds => editTicket({ ...ticket, intensiveCareUnitBeds }));

  const submit = () => {
    editTicket({ ...ticket, stage: 'admission' })
    closeModal()
  }

  return (
    <Form>
      <h3>Admission Form</h3>
      <FormRow>
        <Field label="Attending hospital staff in PPE gear" value={ticket.attendingHospitalStaff} onChange={setAttendingHospitalStaff} />
        <Field label="On duty Doctor" value={ticket.onDutyDoctor} onChange={setOnDutyDoctor} />
      </FormRow>
      <FormRow>
        <Field label="Num of COVID/isolation ward beds" type="number" value={ticket.noOfWardBeds} onChange={setNoOfWardBeds} />
        <Field label="Intensive care unit beds for COVID patients" type="number" value={ticket.intensiveCareUnitBeds} onChange={setIntensiveCareUnitBeds} />
      </FormRow>
      <FormRow>
        <Button onClick={submit}>Submit</Button>
      </FormRow>
    </Form>
  )
};

export default AdmissionForm;
