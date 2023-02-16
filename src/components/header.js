//create a header component that will be used in the app
//this component will be used in the app.js file

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{fontSize: "1.2rem"}}>
        <Navbar.Brand>React-Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/employment">
              <Nav.Link>Employment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/education">
              <Nav.Link>Education</Nav.Link>
            </LinkContainer>
            {/* //TODO: add skills and reference links */}
            <LinkContainer to="/skills">
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/references">
              <Nav.Link>References</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
