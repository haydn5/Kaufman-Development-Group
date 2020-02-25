import React from "react"

import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'gatsby'

import logo from "../images/kaufman-logo.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';


    export default () => 
        <div className="boxShadow">
      <Container>
        <Navbar className="navbar  navbar-expand-md" id="mainNav" expand="xl"
                collapseOnSelect={true}>
          
            <Link className="navbar-brand">
              <img src={logo} alt={'Kaufman Development Group'} className="imgFullCol" width="200" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav text-center" >
              <ul className="navbar-nav  text-center">
                <li><Link to="/about" className="nav-link" activeClassName="active">About</Link></li>
                <li><Link to="/contact" className="nav-link" activeClassName="active">Contact</Link></li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
        </Container>
        </div>