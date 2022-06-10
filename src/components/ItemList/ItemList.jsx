import React from "react";
import { Row } from 'react-bootstrap'
import { CardItem } from '../CardItem/CardItem'

const ItemList = ({products}) => {
    return (
        <Row>
            {
                products.map(product => {
                    return (
                        <CardItem key={product.id} {...product} />
                    )
                })
            }
        </Row>

    )
}

export default ItemList;