import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toggleFalse } from '../redux/actions/contactActions'

function NavBar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleToggleFalse=()=>{
      dispatch(toggleFalse());
      navigate('/ManageContacts');
      
    }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Welcome ! </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/listContact">Contacts</Nav.Link>
                        <Nav.Link as={Link} onClick={handleToggleFalse} to="/ManageContacts">Add Contact</Nav.Link>
                    </Nav>
                </Container>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar