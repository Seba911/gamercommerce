import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Item from "../Item/Item"

const ItemList = ({dataProducts}) =>{

    const {cartProducts} = useContext(CartContext)

    console.log("Info desde el contexto: ", cartProducts )

    return(
        <>  
            {dataProducts?.map( (product) => {
                return <Item key={product.id} data={product} />  
            })}
        </>
    )
}
export default ItemList