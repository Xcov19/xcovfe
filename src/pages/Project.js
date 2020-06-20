import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";

import TicketFormModal from "../components/TicketFormModal";
import SuspectedCaseFormContainer from "../containers/SuspectedCaseFormContainer";
import Tickets from "../components/Tickets";

const contentHeight = 'calc(100vh - 100px)';
const styles = {
  toggleWrapper: {
    position: 'absolute',
    top: 72,
    right: 12,
    zIndex: 99,
  },
  notificationsWrapper: {
    width: '100%',
  },
  notification: {
    width: 300 - 24,
    margin: 24,
  },
  contentWrapper: {
    minHeight: contentHeight,
    overflowY: 'hidden',
    overflowX: 'hidden',
  },
  casesOverview: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflowY: 'scroll',
    backgroundColor: 'white',
    zIndex: 10,
  },
  hideCasesOverview: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    top: "100vh",
  },
  bell: {
    marginTop: 6,
    height: 30,
    width: 30,
    cursor: 'pointer',
  },
  previous: {
    marginRight: 24
  },
  addNewTicket: {
    width: 140,
    height: 40,
    marginRight: 110,
    fontSize: 14,
    position: "absolute",
    right: 0
  },
  casesHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 12,
  },
};

const Notification = () =>
  <Card className="mb-4" style={styles.notification}>
    <Card.Body>
      <Card.Title>Notification</Card.Title>
      <Card.Text>
        You have to do something!
      </Card.Text>
    </Card.Body>
  </Card>;

const Bell = props => <svg {...props} viewBox="0 0 24 24">
  <path fill="#345bcb" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
</svg>;

const Notifications = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <React.Fragment>
      <div style={styles.toggleWrapper}>
        <Bell
          onClick={() => setExpanded(!expanded)}
          style={styles.bell}
          className="transition"
        />
      </div>

      <div className={`transition ${expanded ? 'expanded-sidebar' : 'collapsed-sidebar'}`}>
        <div style={styles.notificationsWrapper}>
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </div>
      </div>
    </React.Fragment>
  )
};

const CasesOverview = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div>
      <Button onClick={() => setExpanded(true)} className="mt-4">Show cases</Button>

      <div
        style={expanded ? styles.casesOverview : styles.hideCasesOverview}
        className="transition"
      >
        <div style={styles.casesHeader}>
          <h3>Project Title</h3>
          <span>
            <Button onClick={() => {}} className="mr-2">Add Patient</Button>
            <Button onClick={() => setExpanded(false)}>Close cases</Button>
          </span>
        </div>
        <Tickets />
      </div>
    </div>
  )
};

const ProjectCard = () =>
  <Col md={6}>
    <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content. Some quick example text to build on the card title and make up the bulk of
          the card's content. Some quick example text to build on the card title and make up the bulk of
          the card's content. Some quick example text to build on the card title and make up the bulk of
          the card's content. Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>;

const Project = ({ history }) => {
  const [opened, setOpened] = useState(false);

  const goToPreviousPage = e => {
    e.preventDefault();
    history.goBack();
  };
  const addNewTicket = () => {
    setOpened(!opened)
  };

  return <Row style={styles.contentWrapper}>
    <Col>
      <span>
        <h3 className="mb-4 text-gray-800">
          <a href="#" style={styles.previous} onClick={goToPreviousPage}>{"<"}</a>
          <span>Project</span>
          <button style={styles.addNewTicket} onClick={addNewTicket}>Open new suspect</button>
        </h3>
      </span>

      <TicketFormModal opened={opened}>
        <SuspectedCaseFormContainer ticketId={1} />
      </TicketFormModal>

      <Row>
        <ProjectCard />
        <ProjectCard />
      </Row>
      <Row className="my-4">
        <ProjectCard />
        <ProjectCard />
      </Row>

      <CasesOverview />
    </Col>

    <Notifications />
  </Row>
};

export default withRouter(Project);
