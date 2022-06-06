import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemListContainer.css'
import { CardItem } from '../CardItem/CardItem'


export const ItemListContainer = () => {
    return (
        <div className="itemsContainer">
            <CardItem />
        </div>
    )
}