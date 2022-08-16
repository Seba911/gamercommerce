import './Item.scss'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { height } from '@mui/system'

const Item = ({ data }) => {

    const { handleClick, name } = useContext(CartContext)
    const { id, title, price, img, category, stock, initial } = data

    /*     console.log("Titulo: " + title + "Precio: " + price) */

    return (
        <Col lg="3" className="card mx-2 mb-5" >
            <div className='rounded' style={{ backgroundColor: "white", padding: 15 }}>
                {name}
                <Link to={`/productos/${id}`} style={{ textDecoration: "none" }}>
                    <img className='rounded' style={{ width: "100%", height: "inherit" }} src={img} />
                    <h5 style={{ color: "purple", fontWeight: "600" }}>{title}</h5>
                </Link>
                <h4 style={{ color: "gray", fontWeight: "300" }}>$ {price}</h4>
                <p>Stock: {stock}</p>
            </div>


        </Col>
    )
}

export default Item