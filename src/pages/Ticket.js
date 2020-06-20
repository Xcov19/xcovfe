import React, { useState, useEffect } from "react";
import TicketFormModal from "../components/TicketFormModal";

import CaseClosingFormContainer from "../containers/CaseClosingFormContainer";
import AdmissionFormContainer from "../containers/AdmissionFormContainer";
import MonitoringFormContainer from "../containers/MonitoringFormContainer";
import TestResultFormContainer from "../containers/TestResultFormContainer";

import { Button, Card, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";

const OpenSuspectedFormData = ({ ticket }) => {
  return (
    <React.Fragment>
      <h3>Open Suspected Form Data</h3>
      <Row>
        <Col>
          Name: {ticket.name}
        </Col>
      </Row>

      <Row>
        <Col>
          Stage: {ticket.stage}
        </Col>
      </Row>

      <Row>
        <Col>
          Organisation: {ticket.organisation}
        </Col>
      </Row>

      <Row>
        <Col>
          Assign: {ticket.assign}
        </Col>
      </Row>

      <Row>
        <Col>
          Notes: {ticket.notes}
        </Col>
      </Row>
    </React.Fragment>
  )
}

const TestFormData = ({ ticket }) => {
  return (
    <React.Fragment>
      <h3>Test Form Data</h3>
      <Row>
        <Col>
          Patient Report: {ticket.patientReport}
        </Col>
      </Row>

      <Row>
        <Col>
          Pre existing disease: {ticket.preExistingDisease}
        </Col>
      </Row>

      <Row>
        <Col>
          Bed: {ticket.patientBed}
        </Col>
      </Row>

      <Row>
        <Col>
          Case history: {ticket.caseHistory}
        </Col>
      </Row>
      <Row>
        <Col>
          Severity Assessment Report: {ticket.severityAssessmentReport}
        </Col>
      </Row>
    </React.Fragment>
  )
}

const AdmissionFormData = ({ ticket }) => {
  return (
    <React.Fragment>
      <h3>Admission Form Data</h3>
      <Row>
        <Col>
          Attending hospital staff in PPE gear: {ticket.attendingHospitalStaff}
        </Col>
      </Row>
      <Row>
        <Col>
          On duty Doctor: {ticket.onDutyDoctor}
        </Col>
      </Row>
      <Row>
        <Col>
          Num of COVID/isolation ward beds: {ticket.noOfWardBeds}
        </Col>
      </Row>
      <Row>
        <Col>
          Intensive care unit beds for COVID patients: {ticket.intensiveCareUnitBeds}
        </Col>
      </Row>
    </React.Fragment>
  )
}

const MonitoringFormData = ({ ticket }) => {
  return (
    <React.Fragment>
      <h3>Monitoring Form Data</h3>
      <Row>
        <Col>
          RM/On duty Doctor: {ticket.rmDutyDoctor}
        </Col>
      </Row>
      <Row>
        <Col>
          Vital Stats 8 hourly record: {ticket.vitalStats}
        </Col>
      </Row>
      <Row>
        <Col>
          Routine Daily tests record: {ticket.routineDailyTestsRecord}
        </Col>
      </Row>
      <Row>
        <Col>
          Doctor record for Daily rounds: {ticket.doctorRecordForDailyRounds}
        </Col>
      </Row>
      <Row>
        <Col>
          Active nursing details: {ticket.activeNursingDetails}
        </Col>
      </Row>
      <Row>
        <Col>
          Paramedical staff: {ticket.paramedicalStaff}
        </Col>
      </Row>
      <Row>
        <Col>
          Periodic Covid Report: {ticket.periodicCovidReport}
        </Col>
      </Row>
    </React.Fragment>
  )
}

const CaseClosingFormData = ({ ticket }) => {
  return (
    <React.Fragment>
      <h3>Case Closing Form Data</h3>
      <Row>
        <Col>
          Negative covid report on two occasions: {ticket.negativeCovidReport}
        </Col>
      </Row>
      <Row>
        <Col>
          Normal vitals/Normal blood reports: {ticket.vitalsBloodReports}
        </Col>
      </Row>
      <Row>
        <Col>
          Last 2 Covid Reports: {ticket.lastCovidReports}
        </Col>
      </Row>
      <Row>
        <Col>
          Last blood Report: {ticket.lastBloodReport}
        </Col>
      </Row>
      <Row>
        <Col>
          Active nursing details: {ticket.activeNursingDetails}
        </Col>
      </Row>
      <Row>
        <Col>
          Paramedical staff: {ticket.paramedicalStaff}
        </Col>
      </Row>
      <Row>
        <Col>
          Periodic Covid Report: {ticket.periodicCovidReport}
        </Col>
      </Row>
      <Row>
        <Col>
          Authorities informed: {ticket.authoritiesInformed}
        </Col>
      </Row>
      <Row>
        <Col>
          Family informed: {ticket.familyInformed}
        </Col>
      </Row>
      <Row>
        <Col>
          Autopsy done: {ticket.autopsyDone}
        </Col>
      </Row>
      <Row>
        <Col>
          Autopsy details record(?): {ticket.autopsyDetailsRecord}
        </Col>
      </Row>
    </React.Fragment>
  )
}

const Ticket = (props) => {
  const ticketId = props.match.params.id;
  const ticket = props.tickets.find(({ id }) => ticketId == id);

  const [opened, setOpened] = useState(false);

  const moveToNextStage = () => {
    setOpened(!opened)
  }

  const closeModal = () => {
    setOpened(!opened)
  }

  return (

    <React.Fragment>
      <Row>
        <Col>
          <span>
            <h3 className="mb-4 text-gray-800">
              <span>Ticket - {props.match.params.id}</span>
            </h3>
          </span>
        </Col>
      </Row>

      {(ticket.stage === 'open_case_suspect' || ticket.stage === 'test_result' || ticket.stage === 'admission' || ticket.stage === 'case_monitoring' || ticket.stage === 'case_closed') && <OpenSuspectedFormData ticket={ticket} />}
      <br />
      {(ticket.stage === 'test_result' || ticket.stage === 'admission' || ticket.stage === 'case_monitoring' || ticket.stage === 'case_closed') && <TestFormData ticket={ticket} />}
      <br />
      {(ticket.stage === 'admission' || ticket.stage === 'case_monitoring' || ticket.stage === 'case_closed') && <AdmissionFormData ticket={ticket} />}
      <br />
      {(ticket.stage === 'case_monitoring' || ticket.stage === 'case_closed') && <MonitoringFormData ticket={ticket} />}
      <br />
      {ticket.stage === 'case_closed' && <CaseClosingFormData ticket={ticket} />}


      {ticket.stage !== 'case_closed' && <Row>
        <Col>
          <button onClick={moveToNextStage}>Move to next stage</button>
        </Col>
      </Row>}


      <TicketFormModal opened={opened}>
        {ticket.stage === 'open_case_suspect' && <TestResultFormContainer ticketId={ticketId} closeModal={closeModal} />}
        {ticket.stage === 'test_result' && <AdmissionFormContainer ticketId={ticketId} closeModal={closeModal} />}
        {ticket.stage === 'admission' && <MonitoringFormContainer ticketId={ticketId} closeModal={closeModal} />}
        {ticket.stage === 'case_monitoring' && <CaseClosingFormContainer ticketId={ticketId} closeModal={closeModal} />}
      </TicketFormModal>
    </React.Fragment>
  )
};

export default withRouter(Ticket);
