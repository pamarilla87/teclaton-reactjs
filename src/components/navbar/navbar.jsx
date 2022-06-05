import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import { BarraDeBusqueda } from '../SearchBar/SearchBar'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


export const BarraDeNavegacion = () => {
    return (
        <>
            <BarraDeBusqueda />
            <Navbar collapseOnSelect expand="lg" variant="light" bg="primary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg--primary" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navBarText navBarPosition">
                        <Nav>
                            <Nav.Link href="#home" className="ps-3 pe-5 nav-links">Inicio</Nav.Link>
                            <Nav.Link href="#build" className="ps-3 pe-5 nav-links">Arma tu PC</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown" className="ps-3 pe-5">
                                <NavDropdown.Item href="#action/3.1" className="nav-links ">Procesadores</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="nav-links">Motherboards</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="nav-links">Placas de video</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4" className="nav-links">Memorias</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5" className="nav-links">Almacenamiento</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6" className="nav-links">Fuentes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7" className="nav-links">Gabinetes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#help" className="ps-3 pe-5 nav-links">Ayuda</Nav.Link>
                            <Nav.Link href="#sponsors" className="ps-3 pe-5 nav-links">Marcas Sponsor</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}