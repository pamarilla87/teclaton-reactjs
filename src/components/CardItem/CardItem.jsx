import React from 'react'
import logo from '../ItemListContainer/logo.svg';
import './CardItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ItemCounter} from '../ItemCounter/ItemCounter'
import { Card, Button } from 'react-bootstrap'

export const CardItem = () => {
    return (
        <Card className="cardContainer" >
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>Placa de Video MSI GeForce RTX 3090 24GB GDDR6X VENTUS 3X OC</Card.Title>
                <ItemCounter />
            </Card.Body>
        </Card>
    )

} 