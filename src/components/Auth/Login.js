import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="mt-2">
      <Row className="justify-content-md-center">
        <Col xs lg="6" className="shadow-lg p-3 mb-5 bg-light rounded">
          <Row className="text-center mt-3">
            <h1 className="text-success">Login</h1>
          </Row>
          <Form className=" shadow-none p-4 mb-2 mt-1 bg-light  rounded">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Row className="mb-3 p-2">
              <Button as={Col} variant="success" type="submit">
                Submit
              </Button>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicCheckbox">
              <Link to="/register"><Button variant="light">Haven't any account? <span className="text-success">Register Now</span></Button></Link>
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
