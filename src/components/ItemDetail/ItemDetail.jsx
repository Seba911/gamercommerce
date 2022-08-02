import { Row, Col } from 'reactstrap'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data, section}) =>{

    console.log(data)

    return(
        <div className='container my-5'>
            <p className='m-1 p-1' style={{fontSize:".8em", color:"white", textAlign:"left"}}>{data.category} - {data.title}</p>
            <Row className="m-0 py-4 justify-content-center rounded bg-white">
            <h4 className="mt-4" style={{color:"white", margin:""}}>{section}</h4>
            <Col lg="5" className='mx-4 p-0' >
                <img className='rounded' style={{width:"100%"}} src={data.img}/>
                <Row className='mt-2 m-2 p-0 thumbnail justify-content-between'>
                    <img className='m-0 p-0 rounded' style={{width:70, border:"2px solid #EA75FF"}} src={data.img}/>
                    <img className='m-0 p-0 rounded border' style={{width:70, filter: "contrast(40%) brightness(140%)",}} src={data.img}/>
                    <img className='m-0 p-0 rounded border' style={{width:70, filter: "contrast(40%) brightness(140%)",}} src={data.img}/>
                    <img className='m-0 p-0 rounded border' style={{width:70, filter: "contrast(40%) brightness(140%)",}} src={data.img}/>
                    <img className='m-0 p-0 rounded border' style={{width:70, filter: "contrast(40%) brightness(140%)",}} src={data.img}/>
                    <img className='m-0 p-0 rounded border' style={{width:70, filter: "contrast(40%) brightness(140%)",}} src={data.img}/>
                </Row>
            </Col>
            <Col lg="4" className='p-4 border rounded' style={{textAlign:"left"}}>
                <h3>{data.title}</h3>
                {/* <h3>{title}</h3> */}
                <hr />
                <h2>$ {data.price}</h2>
                <p>o 12 cuotas de $3333 pagando con Tarjeta de Crédito</p>
                <Link to="/" style={{fontSize:".7em", textDecoration:"none", color:"#EA75FF"}} className=''>Ver medios de pago</Link>
                <hr />
                <ItemCount initial={data.initial} stock={data.stock}/>
                <span style={{color:"#3CF586"}}>Envio Gratis</span>
                
                <div>
                    <button className='btn' style={{
                        background:"linear-gradient(180deg, rgba(148,6,171,1) 0%, rgba(212,117,255,1) 100%)",
                        border:"none", 
                        color:"white"}}>
                            Comprar ahora
                    </button>
                    <button className='btn' style={{
                        background:"gray",
                        border:"none", 
                        color:"white"}}>
                            Añadir al carrito
                    </button>
                </div>

            </Col>
    {/*           <ItemList dataProducts={listProducts} /> */}
            </Row>
        </div>
    )
} 
export default ItemDetail