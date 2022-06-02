import React from 'react'
import logo from './logo.svg';
import './SearchBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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
                <Col xs={12} md={4} className="p-1">
                    <Button>
                        Iniciar Sesion
                    </Button>
                </Col>
            </Row>

        </Container>
    )
}