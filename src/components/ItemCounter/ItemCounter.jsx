import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCounter.css'
import { Button, Form, } from 'react-bootstrap'

export const ItemCounter = () => {
    return (
        <>
            <Form.Group className="cart-input">
                <Button className="decreaseButton" variant="primary">-</Button>
                <span className="numberOfItems">1</span>
                <Button className="increaseButton" variant="primary">+</Button>
            </Form.Group>
            <Button className="botonAgregar" variant="primary">Agregar al carrito</Button>
        </>
    )
}