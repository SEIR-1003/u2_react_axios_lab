import '../App.css'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header(){
    const [expanded, setExpanded] = useState(false)

    return(
        
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Star Wars API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Data" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/starships">Starships</NavDropdown.Item>
                    <NavDropdown.Item href="/films">Films</NavDropdown.Item>
                    <NavDropdown.Item href="/people">People</NavDropdown.Item>
                    <NavDropdown.Item href="/planets">Planets</NavDropdown.Item>
                    <NavDropdown.Item href="/species">Species</NavDropdown.Item>
                    <NavDropdown.Item href="/vehicles">Vehicles</NavDropdown.Item>
                    
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default Header