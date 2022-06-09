import React from 'react'
import logo from '../ItemListContainer/logo.svg';
import './CardItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { Card, Col } from 'react-bootstrap'
import Products from '../PricingSheet/PricingSheet.json'


export const CardItem = () => {
    return (
        Products && Products.map(product => {
            return (
                <Col xs={12} md={6} lg={4} xxl={3} className="itemsCols" key={product.id}>
                    {
                        <Card className="cardContainer"  >
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>{product.description}</Card.Title>
                                <Card.Text>$ {product.price}</Card.Text>
                                <ItemCount stock={product.stock} />
                            </Card.Body>
                        </Card>
                    }
                </Col>
            )
        })
    )
}