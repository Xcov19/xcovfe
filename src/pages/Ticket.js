import React, { useState, useEffect } from "react";
import TicketFormModal from "../components/TicketFormModal";

import CaseClosingFormContainer from "../containers/CaseClosingFormContainer";
import AdmissionFormContainer from "../containers/AdmissionFormContainer";
import MonitoringFormContainer from "../containers/MonitoringFormContainer";
import TestResultFormContainer from "../containers/TestResultFormContainer";
import SuspectedCaseFormContainer from "../containers/SuspectedCaseFormContainer";

import { Button, Card, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";

const OpenSuspectedFormData = ({ ticket }) => {
  return (
    <React.Fragment>
      <h3>Open Suspected Form Data</h3>
      <Row>
        <Col>
          Case ID: {ticket.caseId}
        </Col>
      </Row>

      <Row>
        <Col>
          Case Stage: {ticket.stage}
        </Col>
      </Row>

      <Row>
        <Col>
          Created By: {ticket.createdBy}
        </Col>
      </Row>

      <Row>
        <Col>
          Name: {ticket.patientName}
        </Col>
      </Row>

      <Row>
        <Col>
          Age: {ticket.patientAge}
        </Col>
      </Row>

      <Row>
        <Col>
          Residential Status: {ticket.patientResidentialStatus}
        </Col>
      </Row>

      <Row>
        <Col>
          Address: {ticket.patientAddress}
        </Col>
      </Row>

      <Row>
        <Col>
          Contact Number: {ticket.patientContactNumber}
        </Col>
      </Row>

      <Row>
        <Col>
          Address: {ticket.patientAddress2}
        </Col>
      </Row>

      <Row>
        <Col>
          Temperature: {ticket.temperature}
        </Col>
      </Row>

      <Row>
        <Col>
          Date of Birth: {ticket.patientDOB}
        </Col>
      </Row>

      <Row>
        <Col>
          Co-existing diseases: {ticket.coexistingDiseases}
        </Col>
      </Row>

      <Row>
        <Col>
          History of contact: {ticket.historyOfContact}
        </Col>
      </Row>

      <Row>
        <Col>
          Travel history: {ticket.travelHistory}
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

const styles = {
  backButton: {
    position: "absolute",
    right: 10
  }
}

const Ticket = (props) => {
  const ticketId = props.match.params.id;
  const ticket = props.tickets.find(({ id }) => ticketId == id);

  const [opened, setOpened] = useState(false);

  const editForm = () => {
    setOpened(!opened)
  }

  const closeModal = () => {
    setOpened(!opened)
  }

  const backToProject = () => {
    props.history.push('/app/project/1')
  }

  const getNextStageText = (stage) => {
    if (stage === 'open_case_suspect') {
      return "Move to Test Stage"
    } else if (stage === 'test_result') {
      return "Move to Admission Stage"
    } else if (stage === 'admission') {
      return "Move to Case Monitoring"
    } else if (stage === 'case_monitoring') {
      return "Move to Case Closed Stage."
    } else if (stage === 'case_closed') {
      return "Close Ticket."
    }
  }

  const moveToNextStage = (stage) => {
    if (stage === 'open_case_suspect') {
      props.editTicket({ ...ticket, stage: 'test_result', showStageButton: 0 })
    } else if (stage === 'test_result') {
      props.editTicket({ ...ticket, stage: 'admission', showStageButton: 0 })
    } else if (stage === 'admission') {
      props.editTicket({ ...ticket, stage: 'case_monitoring', showStageButton: 0 })
    } else if (stage === 'case_monitoring') {
      props.editTicket({ ...ticket, stage: 'case_closed', showStageButton: 0 })
    } else if (stage === 'case_closed') {
      props.editTicket({ ...ticket, stage: 'closed', showStageButton: 0 })
      props.history.push('/app/project/1')
    }
  }

  const moveToCloseStage = () => {
    props.editTicket({ ...ticket, stage: 'case_closed', showStageButton: 1 })
  }

  return (

    <React.Fragment>
      <Row>
        <Col>
          <span>
            <h3 className="mb-4 text-gray-800">
              <span>Ticket - {props.match.params.id}</span>
              <Button style={styles.backButton} onClick={backToProject}>Back to project</Button>
            </h3>
          </span>
        </Col>
      </Row>

      {(ticket.stage === 'open_case_suspect') && <OpenSuspectedFormData ticket={ticket} />}
      {(ticket.stage === 'test_result') && <TestFormData ticket={ticket} />}
      {(ticket.stage === 'admission') && <AdmissionFormData ticket={ticket} />}
      {(ticket.stage === 'case_monitoring') && <MonitoringFormData ticket={ticket} />}
      {(ticket.stage === 'case_closed') && <CaseClosingFormData ticket={ticket} />}
      <br />

      {
        ticket.stage !== 'closed' &&
        <Row>
          <Col>
            <Button onClick={editForm}>Edit Form</Button>
          </Col>

          {
            ticket.showStageButton === 1 ?
              <Col>
                <Button onClick={() => moveToNextStage(ticket.stage)}>
                  {getNextStageText(ticket.stage)}
                </Button>
              </Col> : ''
          }

          {
            ticket.showStageButton === 2 ?
              <Col>
                <Button onClick={() => moveToCloseStage()}>
                  Closing Stage
              </Button>
              </Col> : ''
          }

        </Row>
      }


      <TicketFormModal opened={opened}>
        {ticket.stage === 'open_case_suspect' && <SuspectedCaseFormContainer ticketId={ticketId} closeModal={closeModal} />}
        {ticket.stage === 'test_result' && <TestResultFormContainer ticketId={ticketId} closeModal={closeModal} />}
        {ticket.stage === 'admission' && <AdmissionFormContainer ticketId={ticketId} closeModal={closeModal} />}
        {ticket.stage === 'case_monitoring' && <MonitoringFormContainer ticketId={ticketId} closeModal={closeModal} />}
        {ticket.stage === 'case_closed' && <CaseClosingFormContainer ticketId={ticketId} closeModal={closeModal} />}
      </TicketFormModal>
    </React.Fragment>
  )
};

export default withRouter(Ticket);
