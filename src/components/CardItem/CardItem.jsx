import React from 'react'
import './CardItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { Card, Col } from 'react-bootstrap'


export const CardItem = ({description, price, stock, img}) => {
    return (
        <Col xs={12} md={6} lg={4} xxl={3} className="itemsCols">
            {
                <Card className="cardContainer"  >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{description}</Card.Title>
                        <Card.Text>$ {price}</Card.Text>
                        <ItemCount stock={stock} />
                    </Card.Body>
                </Card>
            }
        </Col>
    )
}