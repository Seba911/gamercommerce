import './ItemProduct.scss'
import { Col } from 'reactstrap'

const ItemProduct = ({ title, price, imageProduct }) => {

    console.log("Titulo: " + title + "Precio: " + price)
    return (
        <Col lg="3" className="mb-5" >
            <div className='rounded' style={{ backgroundColor:"white", padding:15}}>
                <img className='rounded' style={{width:220,height:220}} src={imageProduct}/>
                <h5 style={{color:"purple", fontWeight:"600"}}>{title}</h5>
                <h4 style={{color:"gray", fontWeight:"300"}}>$ {price}</h4>
                <button className='btn' style={{
                    background:"linear-gradient(180deg, rgba(148,6,171,1) 0%, rgba(212,117,255,1) 100%)",
                    border:"none", 
                    color:"white"}}>
                        Comprar
                </button>
            </div>
        </Col>
    )
}

export default ItemProduct