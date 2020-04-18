import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import logo from '../tma-logo-1.png';

import {Container, Nav, Navbar, NavItem, Image, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

const Styles = styled.div`
.Nav {
    color:black;
  }

  .Nav:hover {
    color: #722f37;
    border-bottom: 3px solid #722f37;
  }

  .Nav a:active {
    color: #722f37;
    border-bottom: 3px solid #722f37; 
  }
  .NavBar {
    
  }
  .top-div {
    background-color: black;
    height: 10px;
    position: relative;
  }
  
`;

export class Navigation extends Component {
    
    render() {

        return (
        <Styles >
          <div className="NavBar">
          <div className="top-div"/>
          <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand href="/">
            <a href="/">
                <Image
                    src={logo}
                    align="left"
                    width="90%"
                    height="90%"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    fluid
                />
            </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                <Nav.Item><Nav.Link href="/about" className="Nav">About</Nav.Link></Nav.Item>
                <Nav.Link href="/performance-company" className="Nav">Performance Company</Nav.Link>
                <Nav.Link href="/faculty" className="Nav">Faculty</Nav.Link>
                <Nav.Link href="/registration" className="Nav">Registration</Nav.Link>
                <Nav.Link href="/pricing" className="Nav">Pricing</Nav.Link>
                <Nav.Link href="/schedule" className="fancy-nav-link">Schedule</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </Styles>
        )
    }
}

export default Navigation
