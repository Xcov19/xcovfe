import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";

const TicketFormModal = ({ children, title }) => {
  const [closed, setClosed] = useState(false);
  const close = () => setClosed(true);
  return (
      <Modal
          show={!closed && !!children}
          dialogClassName="create-project-dialog"
      >
        <Modal.Body>
          {children}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={close} className="px-4">Close</Button>
        </Modal.Footer>
      </Modal>
  );
};

export default TicketFormModal;
