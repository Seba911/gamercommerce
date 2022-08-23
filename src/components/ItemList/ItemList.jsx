import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Item from "../Item/Item"

const ItemList = ({dataProducts}) =>{

    const {cartProducts} = useContext(CartContext)

    return(
        <>  
            {dataProducts?.map( (product) => {
                return <Item key={product.id} data={product} />  
            })}
        </>
    )
}
export default ItemList