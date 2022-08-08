import { Row } from 'reactstrap'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

const ItemListContainer = ({section}) =>{

/*     const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false); */

    const [listProducts, setListProducts] = useState([])

    const {categoryId} = useParams()

    const filterByCategory = products.filter((product) => product.category === categoryId)

/*     console.log(products) */

/*     useEffect(() => {
        if (loading) {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        }
    }, [loading]); */

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
                console.log("la llama fallo", error)
            })
            .finally( () => { // Siempre que termina por OK o Fallo
/*             setLoading(!loading);
            setShow(!show); */
            })
    }, [categoryId])

    return(
        <Row className="m-0 p-0 justify-content-center">
          <h4 className="mt-4" style={{color:"white", margin:""}}>{section}</h4>
{/*        {!show ? <Loading /> : <ItemList dataProducts={listProducts}/>} */}
          <ItemList dataProducts={listProducts} />
        </Row>
    )
} 
export default ItemListContainer