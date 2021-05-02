import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Nav, Navbar, Button, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SetNavbar.css';
import resume from '../../../resume.pdf'

const SetNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar" className="navShadow">

      <ScrollAnimation duration={5}
        animateIn='hinge'
        initiallyVisible={true}>
        <Navbar.Brand href="#home"><span id="nameStyle">||Fahim||</span></Navbar.Brand>
      </ScrollAnimation>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-center" style={{ flex: 1 }}>
          <NavItem className="itemStyle"><Link className="items" to="/home">Home</Link></NavItem>
          <NavItem className="itemStyle"><Link className="items" to="/about">about</Link></NavItem>
          <NavItem className="itemStyle"><Link className="items" to="/blog">Blog</Link></NavItem>
          <NavItem className="itemStyle"><Link className="items" to="/projects">Projects</Link></NavItem>
          <NavItem className="itemStyle"><Link className="items" to="/contact">Contact</Link></NavItem>
        </Nav>

        <a className="buttonStyle" href={resume} download>
          Download Resume</a>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default SetNavbar;