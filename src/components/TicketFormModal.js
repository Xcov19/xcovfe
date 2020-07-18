import React, { useState, useEffect } from 'react';
import { Button, Modal } from "react-bootstrap";

const TicketFormModal = ({ children, title, opened }) => {
  const [closed, setClosed] = useState(false);
  const close = () => setClosed(true);

  useEffect( () => {
    setClosed(!closed)
  }, [opened])

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
