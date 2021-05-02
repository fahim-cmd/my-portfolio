import React from 'react';
import { Nav, Navbar, Button, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SetNavbar.css';

const SetNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar" className="navShadow">
      <Navbar.Brand href="#home"><span id="nameStyle">||Fahim||</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-center" style={{ flex: 1 }}>
          <NavItem><Link className="items" to="/home">Home</Link></NavItem>
          <NavItem><Link className="items" to="/about">about</Link></NavItem>
          <NavItem><Link className="items" to="/blog">Blog</Link></NavItem>
          <NavItem><Link className="items" to="/projects">Projects</Link></NavItem>
          <NavItem><Link className="items" to="/contact">Contact</Link></NavItem>
        </Nav>
        
        <button className="buttonStyle"><a href="https://drive.google.com/file/d/1hwxXQ6nVG1FGGcH-e97o6IczOm2Cu51d/view">
          Download Resume</a></button>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default SetNavbar;