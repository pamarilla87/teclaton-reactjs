import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemListContainer.css'
import Products from '../utils/PricingSheet.json'
import ItemList from '../ItemList/ItemList'
import fetchProducts from '../utils/FetchProducts'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { Container} from 'react-bootstrap'
import { useEffect, useState } from 'react'



export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProducts(3000, Products)
            .then(resultado => setProductos(resultado))
    }, [])

    return (
        <Container className="itemsContainer"> {
            productos?.length <= 0 ? <LoadingScreen /> : <ItemList products={productos} />
        }
        </Container>
    )
}