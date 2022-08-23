import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../utils/products.mock'
import {useParams} from 'react-router-dom'
import Modal from '../Modal/Modal'

import db from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import Loading from '../Loading/Loading'

const ItemDetailContainer = ({section}) =>{


    const [loading, setLoading] = useState(false);
    // Para pasar a Itemdetails, hay q guardar el estado del producto en
    /* uno nuevo */
    const [productData, setProductData] = useState({})
    const [showModal, setShowModal] = useState(false)

    // console.log("use Params",useParams())
    
    const {id} = useParams()

    // console.log("id de parametro", id)

    useEffect( () =>{
/*         filterById() */
        getProduct()
        .then((res) =>{
            setLoading(false)
            setProductData(res)
        })
    },[id])

/*     const filterById = () =>{
        products.some( (product) => {
            if (product.id == id){
            // console.log("Producto filtrado: ", product)
                setProductData(product)
            }
        })
    } */

    const getProduct = async () =>{
        // 1° conexion firebase-firestre, 2° nombre de la colecion q hacemos referencia, 3° el id 
        const docRef = doc(db, 'productos', id)
        setLoading(true)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
/*         console.log("data con id: ", product) */
        return product
    }

    return(
        <div className={`container-item-detail ${showModal ? "overlay-black" : ""}`}>
            {
                loading ? <Loading /> : <ItemDetail data={productData} setShowModal={setShowModal}/>
            }

            {
                showModal && (
                <Modal title="Titulo producto" close={setShowModal}>
                    <img src={`/assets/${productData.img}`}/>
                </Modal>
            )}
        </div>
    )
} 
export default ItemDetailContainer