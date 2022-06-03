import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconoDeCarrito = (props) => {
    const { productos } = props;
    return (
        <>
            <FontAwesomeIcon className="cartIcon fa-2x" icon={faCartShopping} />
            <div className="numberProducts">{productos}</div>
        </>
    )
}