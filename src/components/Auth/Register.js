import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="mt-2"> 
      <Row className="justify-content-md-center">
        <Col md="auto" className="shadow-lg p-3 mb-5 bg-light rounded">
            <Row className="text-center mt-3">
            <h1 className="text-success">Register Account</h1>
            </Row>
          <Form className=" shadow-none p-4 mb-2 mt-1 bg-light  rounded">
          <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
      </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4"  controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group as={Col} md="4"  controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group as={Col} md="4"  controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group  as={Col} controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control  />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control />
            </Form.Group>
            </Row>
            
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>District</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Register As</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>User</option>
                  <option>Admin</option>
                  <option>Doctor</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

           <Row className="mb-3 p-2">
           
           <Button as={Col} variant="success" type="submit">
              Submit
            </Button>
           
           </Row>
           <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicCheckbox">
                <Link to="/login"><Button variant="light">Have an account? <span className="text-success">Login</span></Button></Link>
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
