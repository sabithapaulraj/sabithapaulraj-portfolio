import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import "../styles/NavBar.css";
import ReactDOM from 'react-dom';

interface NavBarState {
  isMobile: boolean;
  showDropdown: boolean;
}

class NavBar extends React.Component<{}, NavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = { isMobile: window.innerWidth <= 600, showDropdown: false };
    this.handleResize = this.handleResize.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize() {
    this.setState({ isMobile: window.innerWidth <= 600 });
  }
  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }
  closeDropdown() {
    this.setState({ showDropdown: false });
  }
  renderMobileDropdown() {
    return ReactDOM.createPortal(
      <>
        <div className="mobile-nav-backdrop" onClick={this.closeDropdown} style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', zIndex: 998}} />
        <div className="mobile-nav-dropdown" style={{zIndex: 9999, position: 'fixed', right: 0, top: 56}}>
          <div className="mobile-nav-title">Sabitha.</div>
          <Nav className="mobile-nav-list">
            <Nav.Link href="#intro" onClick={this.closeDropdown}>home</Nav.Link>
            <Nav.Link href="#about" onClick={this.closeDropdown}>about</Nav.Link>
            <Nav.Link href="#experience" onClick={this.closeDropdown}>experience</Nav.Link>
            <Nav.Link href="#projects" onClick={this.closeDropdown}>projects</Nav.Link>
          </Nav>
        </div>
      </>,
      document.body
    );
  }
  render(): React.ReactNode {
    const { isMobile, showDropdown } = this.state;
    return (
      <Navbar fixed="top" className="navbar" style={{ zIndex: 1000 }}>
        <Container>
          <Navbar.Brand href="#"><h1>Sabitha.</h1></Navbar.Brand>
          {isMobile ? (
            <div className="mobile-nav-wrapper">
              <Button className="mobile-menu-btn" onClick={this.toggleDropdown} aria-label="Open navigation menu">
                <span className="navbar-toggler-icon" />
              </Button>
              {showDropdown && this.renderMobileDropdown()}
            </div>
          ) : (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#intro">home</Nav.Link>
                <Nav.Link href="#about">about</Nav.Link>
                <Nav.Link href="#experience">experience</Nav.Link>
                <Nav.Link href="#projects">projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    );
  }
}

export default NavBar; 