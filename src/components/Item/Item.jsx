import './Item.scss'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


const Item = ({ data }) => {

    const { handleClick, name } = useContext(CartContext)
    const { id, title, price, img, stock } = data

    /*     console.log("Titulo: " + title + "Precio: " + price) */

    return (
        <Col lg="3" className="card mx-2 mb-5 bg-dark" style={{border:"1px solid #9d5bff"}} >
            <div className='rounded' style={{ padding: 15 }}>
                {name}
                <Link to={`/productos/${id}`} style={{backgroundColor:"rgba(0,0,0,0.0)", textDecoration: "none" }}>
                    <img className='rounded' style={{ width: "100%", height: "inherit" }} src={img} alt="imagen de muestra"/>
                    <h5 className='mt-3' style={{ color: "#9d5bff", fontWeight: "600" }}>{title}</h5>
                </Link>
                <h4 style={{ color: "white", fontWeight: "400" }}>$ {price}.-</h4>
                <span style={{ backgroundColor:"#9d5bff",padding:5, color: "white", fontWeight: "400", fontSize:".7em", borderRadius:5 }}>STOCK DISPONIBLE: {stock} U.</span>
            </div>


        </Col>
    )
}

export default Item