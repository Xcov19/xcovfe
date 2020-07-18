import React, { useEffect } from 'react';
import {
  setIsAuthenticated,
  isAuthenticated,
  setUsername as storeUsername,
} from '../auth';
import { Field, FileField, FormRow } from "./form";
import ReactCodeInput from 'react-code-input';
import {
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import registerBanner from '../assets/register-banner.jpg';

const styles = {
  registerPage: {
    backgroundColor: 'white',
    minHeight: "100vh",
    width: "100vw",
    margin: 0,
  },
  banner: {
    backgroundImage: `url(${registerBanner})`,
    height: "100%",
    minHeight: "100vh",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    textAlign: "center",
    marginTop: "25%",
    fontSize: "50px",
    fontWeight: 700,
    color: "black",
  },
  subtitle: {
    textAlign: "center",
    margin: "24px",
    color: "black",
  },
  codeInput: {
    marginRight:  '4px',
    MozAppearance: 'textfield',
    borderRadius: '6px',
    fontSize: '20px',
    height: '44px',
    width: '44px',
    padding: '4px',
    color: 'white',
    textAlign: 'center',
    fontWeight: 700,
    shadow: 'none',
    border: 'none',
    backgroundColor: '#DDDDDD',
  },
};

const Register = props => {
  const [username, setUsername] = React.useState('');
  const [otp, setOtp] = React.useState('');
  useEffect(() => {
    if (isAuthenticated()) {
      this.props.history.push('/app/dashboard');
    }
  }, []);

  const login = () => {
    if (username) {
      storeUsername(username);
    }
    setIsAuthenticated(true);
    props.history.push('/app/dashboard');
  };

  const bannerSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing " +
      "elit. Phasellus ut magna eu neque molestie egestas. Vestibulum a sagittis " +
      "risus. Phasellus pellentesque dapibus magna ut placerat.";

  return (
      <Row style={styles.registerPage}>
        <Col md={4} style={styles.banner}>
          <h1 style={styles.title}>Sign Up</h1>
          <h5 style={styles.subtitle}>{bannerSubtitle}</h5>
        </Col>

        <Col md={8}>
          <Form onSubmit={() => {}} className="p-4">
            <FormRow>
              <Field label="Organisation Name"/>
              <Field label="Organisation Address"/>
            </FormRow>

            <FormRow>
              <Field
                label="First Name"
                onChange={e => setUsername(e.target.value)}
                value={username}
              />
              <Field label="Last Address"/>
            </FormRow>

            <FormRow>
              <Field label="Email" type="email"/>
              <Field label="Phone number"/>
            </FormRow>

            <FormRow>
              <Field label="Password" type="password"/>
              <Field label="Confirm Password" type="password"/>
            </FormRow>

            <FormRow>
              <Field label="Role in organisation (optional)"/>
              <FileField label="Upload photo"/>
            </FormRow>

            <p>Send OTP to</p>
            <Button type="submit" className="px-4">Phone</Button>
            <span className="mx-4">or</span>
            <Button type="submit" className="px-4">Email</Button>

            <p className="mt-4 pt-4">Enter OTP</p>
            <ReactCodeInput type='number' fields={4} inputStyle={styles.codeInput} onChange={setOtp}/>
            <p className="mt-4">Did not receive OTP? <a className="mx-2" href="#">RESEND</a></p>

            <Button onClick={login} disabled={otp.length !== 4} type="submit" className="px-4">Get Started</Button>
          </Form>
        </Col>
      </Row>
  );
};

export default Register;
