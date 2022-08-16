import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import Fab from '@mui/material/Fab';


import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {Row, Col} from 'reactstrap'

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { cartProducts, clear, removeItem, totalProducts } = useContext(CartContext)



    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(cartProducts.length)

    console.log("Total products: ", totalProducts)


    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{color:"white"}}
            >
                <ShoppingCartIcon />
                {cartProducts.length !== 0 && <div style={{backgroundColor:"red", width:15, borderRadius:25, height:16, margin:"0px -10px"}} >
                    <p className='' style={{fontSize:".7em"}}>{totalProducts}</p>
                </div>}

                

            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >   
                {cartProducts.length === 0 ? 
                    <div className='text-center '>
                        <div className=''>
                            <RemoveShoppingCartIcon style={{color:"gray"}}/>
                        </div>
                        <div>
                            <p className='w-50 m-auto' style={{fontSize:".75em", color:"gray", textAlign:"center"}}>Aún no tenes productos cargados al carrito</p> 
                        </div>
                    </div>
                    :
                    cartProducts.map((product) =>{
                    {console.log("Titulo del producto: " , product.title)}
                    return(
                        <div key={product.id} className="m-3">
                            <h6>{product.title}</h6>
                            <div className='d-flex'>
                                <img style={{width:"90px"}} src={product.img} alt={product.title}/>
                                <div className='m-3'>
                                    <p style={{fontSize:".6em"}}><strong>Precio:</strong> $ {product.price} c/u</p>
                                    <div className='d-flex'>
                                        <p className='m-0 p-0' style={{fontSize:".6em"}}>{console.log("Cantidad: ", product.countQuantity )}CANTIDAD: {product.countQuantity}</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                <Fab size="small" color="warning" className="" aria-label="add" onClick={() => removeItem(product.id)}>
                                    <DeleteIcon />
                                </Fab>

                                </div>
                            </div>
                            
                            <hr className="" />
                        </div>
                    )
                })}
                <div className='text-center'>
                    <Link to="/cart"><button className='btn btn-secondary m-2'>Ir al CheckOut</button></Link>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary m-2' onClick={() => clear()}><DeleteForeverIcon />Borrar Todo</button>
                </div>
         
            </Menu>
        </div>
      
    )
}
export default CartWidget