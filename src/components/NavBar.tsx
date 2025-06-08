import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render(): React.ReactNode {
    return (
      <Navbar fixed="top" className="navbar">
        <Container>
          <Navbar.Brand href="#"><h1>Sabitha.</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">home</Nav.Link>
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#experience">experience</Nav.Link>
              <Nav.Link href="#projects">projects</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar; 