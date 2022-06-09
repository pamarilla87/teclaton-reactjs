import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCounter.css'
import { Button, Form, } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export const ItemCounter = (props) => {
    const {stock} = props;
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)   
        }
    }

    const handleIncrement = () => {
        if (count < stock )
            setCount(count + 1)
    } 

    return (
        <>
            <Form.Group className="cart-input">
                <Button onClick={handleDecrement} className="decreaseButton" variant="primary">-</Button>
                <span className="numberOfItems">{count}</span>
                <Button onClick={handleIncrement} className="increaseButton" variant="primary">+</Button>
            </Form.Group>
            <Button className="botonAgregar" variant="primary">Agregar al carrito</Button>
        </>
    )
}