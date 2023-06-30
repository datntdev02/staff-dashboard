import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Navigation.scss'
import { Button } from '@mui/material';

function Navigation({ data, handleLogout }) {
    return (
        <Container>
            <Navbar expand="lg" collapseOnSelect >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggle' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/dashboard" className="nav-link">
                            Dashboard
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                        <NavLink className="group-btn">
                            {data ? (
                                <Button className="btn" style={{color:"#fff", backgroundColor:"#000"}} onClick={handleLogout}>
                                   Logout
                                </Button>
                            ) : (
                                <Button className="btn" style={{color:"#fff", backgroundColor:"#000"}} component={NavLink} to="/login">
                                    Login
                                </Button>
                            )}
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >
    )
}

export default Navigation