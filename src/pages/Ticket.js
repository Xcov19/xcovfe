import React, { useState, useEffect } from "react";
import TicketFormModal from "../components/TicketFormModal";
import SuspectedCaseFormContainer from "../containers/SuspectedCaseFormContainer";
import { Button, Card, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";

const Ticket = (props) => {
  let [ticketObject, setTicketObject] = useState({});

  const getTicketData = () => {
    props.tickets.forEach((ticket) => {
      if (ticket.id == props.match.params.id) {
        setTicketObject(ticket)
      }
    })
  }

  useEffect(() => {
    console.log(getTicketData())
  }, [])

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

      {ticketObject ?
        (<React.Fragment>
          <Row>
            <Col>
              Name: {ticketObject.name}
            </Col>
          </Row>

          <Row>
            <Col>
              Stage: {ticketObject.stage}
            </Col>
          </Row>

          <Row>
            <Col>
              Organisation: {ticketObject.organisation}
            </Col>
          </Row>

          <Row>
            <Col>
              Assign: {ticketObject.assign}
            </Col>
          </Row>

          <Row>
            <Col>
              Name: {ticketObject.notes}
            </Col>
          </Row>
        </React.Fragment>) : ''
      }



      <TicketFormModal>
        <SuspectedCaseFormContainer ticketId={props.match.params.id} />
      </TicketFormModal>
    </React.Fragment>
  )
};

export default withRouter(Ticket);
