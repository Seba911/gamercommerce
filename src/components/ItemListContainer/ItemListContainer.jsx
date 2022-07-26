import { Row } from 'reactstrap'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import products from '../../utils/products.mock'

const ItemListContainer = ({section}) =>{

    const [listProducts, setListProducts] = useState([])

    console.log(products)

    const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () => {
          resolve(products)
      }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { // Respuesta OK
                //console.log("Productos: ", res)
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llama fallo")
            })
            .finally( () => { // Siempre que termina por OK o Fallo
            //setSpinner(false) 
            })
    }, [])



    return(
        <Row className="m-0 p-0 justify-content-center">
          <h4 className="mt-4" style={{color:"white", margin:""}}>{section}</h4>
          <ItemList dataProducts={listProducts} />
        </Row>
    )
} 
export default ItemListContainer