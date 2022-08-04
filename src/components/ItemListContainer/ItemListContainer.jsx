import { Row } from 'reactstrap'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({section}) =>{

    const [listProducts, setListProducts] = useState([])

    const {categoryId} = useParams()

    const filterByCategory = products.filter((product) => product.category === categoryId)

    console.log(products)

    const getProducts = new Promise( (resolve, reject) => {

      setTimeout( () => {
        if(categoryId){
            resolve(filterByCategory)
        } else{
            resolve(products)
        }
      }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { // Respuesta OK
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llama fallo")
            })
            .finally( () => { // Siempre que termina por OK o Fallo
            //setSpinner(false) 
            })
    }, [categoryId])

    return(
        <Row className="m-0 p-0 justify-content-center">
          <h4 className="mt-4" style={{color:"white", margin:""}}>{section}</h4>
          <ItemList dataProducts={listProducts} />
        </Row>
    )
} 
export default ItemListContainer