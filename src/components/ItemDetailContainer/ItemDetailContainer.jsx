import { Row, Col } from 'reactstrap'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../utils/products.mock'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ({section}) =>{


    // Para pasar a Itemdetails, hay q guardar el estado del producto en
    /* uno nuevo */
    const [productData, setProductData] = useState({})

/*     console.log("use Params",useParams()) */
    const {id} = useParams()

/*     console.log("id de parametro", id) */

    useEffect( () =>{
        filterById()
    },[])

    const filterById = () =>{
        products.some( (product) => {
            if (product.id == id){
/*                 console.log("Producto filtrado: ", product) */
                setProductData(product)
            }
        })
    }

    console.log(products)
    return(
        <>
            <ItemDetail data={productData}/>
        </>
    )
} 
export default ItemDetailContainer