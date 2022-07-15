import ItemProduct from "../ItemProduct/ItemProduct"
import { Row } from 'reactstrap'


const ItemContainer = ({section}) =>{
    return(
        <Row className="m-0 p-0 justify-content-center">
          <h4 className="mt-4" style={{color:"white", margin:""}}>{section}</h4>
          <ItemProduct imageProduct={'../assets/images/ASUS-PRIME-B365M.jpg'} price={25000} title="Mother Asus Prime B365M" />
          <ItemProduct imageProduct={'../assets/images/GTX-1650.jpg'} price={65000} title="Placa Nvidia 1650GTX 4gb" />
        </Row>
    )
} 
export default ItemContainer