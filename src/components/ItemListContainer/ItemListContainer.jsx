import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemListContainer.css'
import { CardItem } from '../CardItem/CardItem'
import { Container, Row } from 'react-bootstrap'

export const ItemListContainer = () => {
    return (
        <Container className="itemsContainer">
            <Row className="itemsRows">
                <CardItem />
            </Row>
        </Container>
    )
}