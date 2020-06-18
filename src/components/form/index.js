import React from 'react';
import {
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

export const Select = ({ label, options }) =>
    <Col sm={6} xs={12}>
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control as="select" custom>
                { options.map(option => <option key={option}>{ option }</option>) }
            </Form.Control>
        </Form.Group>
    </Col>;
