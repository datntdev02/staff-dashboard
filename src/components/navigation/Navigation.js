import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import './Navigation.scss'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

function Navigation({ data, handleLogout }) {
    return (
        // <Container>
        //     <Navbar expand="lg" collapseOnSelect >
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggle' />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        // <NavLink to="/" className="nav-link">
        //     Home
        // </NavLink>
        // <NavLink to="/dashboard" className="nav-link">
        //     Dashboard
        // </NavLink>
        // <NavLink to="/contact" className="nav-link">
        //     Contact
        // </NavLink>
        // <NavLink className="group-btn">
        //     {data ? (
        //         <Button className="btn" style={{color:"#fff", backgroundColor:"#000"}} onClick={handleLogout}>
        //            Logout
        //         </Button>
        //     ) : (
        //         <Button className="btn" style={{color:"#fff", backgroundColor:"#000"}} component={NavLink} to="/login">
        //             Login
        //         </Button>
        //     )}
        // </NavLink>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Navbar>
        // </Container >

        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{backgroundColor:"#ccc", padding:"10px"}}>
                <Toolbar>
                    <NavLink to="/" className="nav-link"
                        style={{
                            textDecoration: "none",
                            color: "#000",
                            margin: "10px",
                            fontWeight: "500",
                            fontSize: "20px"
                        }}>
                        Home
                    </NavLink>
                    <NavLink to="/dashboard" className="nav-link"
                        style={{
                            textDecoration: "none",
                            color: "#000", margin: "10px",
                            fontWeight: "500",
                            fontSize: "20px"
                        }}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/contact" className="nav-link"
                        style={{
                            textDecoration: "none",
                            color: "#000",
                            margin: "10px",
                            fontWeight: "500",
                            fontSize: "20px"
                        }}>
                        Contact
                    </NavLink>
                    <NavLink style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        fontSize: "24px",
                        fontWeight: "500",
                        outline: "none"
                    }}>
                        {data ? (
                            <Button className="btn" style={{ color: "#fff", backgroundColor: "#000" }} onClick={handleLogout}>
                                Logout
                            </Button>
                        ) : (
                            <Button className="btn" style={{ color: "#fff", backgroundColor: "#000" }} component={NavLink} to="/login">
                                Login
                            </Button>
                        )}
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box >

    )
}

export default Navigation