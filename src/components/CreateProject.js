import React, { useState } from 'react';
import './CreateProject.scss';
import {
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { Field, FileField, FormRow, Select } from "./form";

const CreateProject = ({ projects, addProject }) => {
  const TEMPLATE_OPTIONS = ["Covid-19"];
  const [hospital, setHospital] = useState(null);
  const [template, setTemplate] = useState(TEMPLATE_OPTIONS[0]);
  const submit = () => {
    addProject({
      hospital,
      template,
    });
  };
  return (
      <Modal
          show={projects.length === 0}
          dialogClassName="create-project-dialog"
      >
        <Modal.Header>
          <Modal.Title>Configure Hospital</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={() => {}} className="p-4">
            <FormRow>
              <Select label="Template" options={TEMPLATE_OPTIONS} onChange={e => setTemplate(e.target.value)} />
            </FormRow>

            <FormRow>
              <Field label="Hospital Name" onChange={e => setHospital(e.target.value)} />
              <Field label="Hospital Address"/>
            </FormRow>

            <FormRow>
              <Field label="Hospital Email" type="email"/>
              <Field label="Hospital Phone"/>
            </FormRow>

            <hr className="mt-4 mb-0 py-4"/>

            <h4>Upload files (optional)</h4>
            <p className="mb-4">File types accepted: csv, json, xml, vcf</p>
            <FormRow>
              <FileField label="Hospital contacts/phones"/>
              <FileField label="Medical inventory"/>
              <FileField label="Admin heads"/>
              <FileField label="list of Doctors and Medical Staff"/>
            </FormRow>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={submit} type="submit" className="px-4">Go to Dashboard</Button>
        </Modal.Footer>
      </Modal>
  );
};

export default CreateProject;
