import React from 'react';
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row
} from "react-bootstrap";

export const FormRow = ({ children }) =>
  <Row className="mb-2">
    { children }
  </Row>;

export const FileField = ({ label }) => {
  const [fileName, setFileName] = React.useState(null);
  const handleFileEvent = function(event) {
    try {
      const filePathName = event.target.value;
      const paths = filePathName.split('\\');
      setFileName(paths[paths.length - 1]);
    } catch (e) {
      setFileName("Uploaded!")
    }
  };
  return (
    <Col sm={6} xs={12}>
      <FormGroup controlId={label}>
        <FormLabel>{label}</FormLabel>
        <Form.File custom label={fileName || ' '} onChange={handleFileEvent}/>
      </FormGroup>
    </Col>
  )};

export const Field = props =>
  <Col sm={6} xs={12}>
    <FormGroup controlId={props.label}>
      <FormLabel>{props.label}</FormLabel>
      <FormControl
        autoFocus
        type={props.type}
        {...props}
      />
    </FormGroup>
  </Col>;

export const MultipleFields = props => {
  const [fields, setFields] = React.useState(['']);
  const addField = () => setFields([...fields, '']);
  const handleKeyPress = (target) => {
    // on enter
    if(target.charCode === 13){
      addField()
    }

    // Backspace
    const isEmpty = !target.value;
    if(target.charCode === 9 && isEmpty){
      addField()
    }
  };
  return <Col sm={6} xs={12}>
    <FormLabel>{props.label} <span style={{color: '#b6b6b6'}}>(enter to add another row)</span></FormLabel>
    { fields.map((field, index) =>
      <FormControl
        autoFocus
        key={index}
        onKeyPress={handleKeyPress}
        type={props.type}
        className="mb-2"
      />
    )}
  </Col>
};

export const Select = props =>
  <Col sm={6} xs={12}>
    <Form.Group>
      <Form.Label style={{ marginRight: "12px" }}>{ props.label }</Form.Label>
      <Form.Control as="select" custom {...props}>
        { props.options.map(option => <option key={option}>{ option }</option>) }
      </Form.Control>
    </Form.Group>
  </Col>;
