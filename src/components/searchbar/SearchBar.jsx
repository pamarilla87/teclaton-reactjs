import React from 'react'
import logo from './logo.svg';
import {IconoDeCarrito} from '../CartIcon/CartIcon';
import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchBar.css';


import { Row, Col, Container, Form, FormControl, Button } from 'react-bootstrap'


export const BarraDeBusqueda = () => {
    return (
        <Container fluid className="searchBarPosition">
            <Row className="searchBarText">
                <Col xs={12} md={4} className="p-1">
                    <img src={logo} className="nav-logo" alt="logo temporario" />
                    Teclaton Store
                </Col>
                <Col xs={12} md={4} className="p-1">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Col>
                <Col xs={6} md={2} className="p-1">
                    <Button variant="primary">
                        Iniciar Sesión
                    </Button>
                </Col>
                <Col xs={6} md={2} className='cartContainer' >
                    <IconoDeCarrito productos="4"/>
                </Col>
            </Row>

        </Container>
    )
}