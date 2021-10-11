import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/doctor-logo.png';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid>
 
  <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Beauty Doctor
      </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Admin</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Doctor</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Login" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavBar;