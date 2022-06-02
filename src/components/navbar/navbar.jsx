import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'


export const BarraDeNavegacion = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Teclaton Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link href="#home" className='m-1 pe-4'>Inicio</Nav.Link>
                        <Nav.Link href="#build" className='m-1 pe-4'>Arma tu PC</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown" className='m-1'>
                            <NavDropdown.Item href="#action/3.1">Procesadores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Motherboards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Placas de video</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Memorias</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Almacenamiento</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Fuentes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">Gabinetes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}