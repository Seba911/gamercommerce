import { Row, Col } from 'reactstrap'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../utils/products.mock'
import {useParams} from 'react-router-dom'
import Modal from '../Modal/Modal'

const ItemDetailContainer = ({section}) =>{


    // Para pasar a Itemdetails, hay q guardar el estado del producto en
    /* uno nuevo */
    const [productData, setProductData] = useState({})
    const [showModal, setShowModal] = useState(false)

/*     console.log("use Params",useParams()) */
    const {id} = useParams()

/*     console.log("id de parametro", id) */

    useEffect( () =>{
        filterById()
    },[id])

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
        <div className={`container-item-detail ${showModal ? "overlay-black" : ""}`}>
            <ItemDetail data={productData} setShowModal={setShowModal}/>
            {showModal && (
                <Modal title="Titulo producto" close={setShowModal}>
                    <img src={`/assets/${productData.img}`}/>
                </Modal>
            )}
        </div>
    )
} 
export default ItemDetailContainer