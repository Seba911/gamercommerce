import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import Fab from '@mui/material/Fab';

import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '../Modal/Modal'

import db from '../../firebaseConfig';
import {collection, addDoc} from 'firebase/firestore'


const Cart = () =>{

    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState(false)

    const { cartProducts, removeItem, totalPreciosProductos, totalPrice } = useContext(CartContext)
    

    // Un estado para mapear la info con la misma estructura de firebase
    const [order, setOrder] = useState({
        items: cartProducts.map( (product) =>{
            return {
                id: product.id,
                title: product.title,
                countQuantity: product.countQuantity,
                price: product.price,
                stock: product.stock
            }
        } ),
        buyer:{},
        date: new Date().toLocaleString(),
        total: totalPreciosProductos
    })

    useEffect(() =>{
        setOrder({
            items: cartProducts.map( (product) =>{
                return {
                    id: product.id,
                    title: product.title,
                    countQuantity: product.countQuantity,
                    price: product.price,
                    stock: product.stock
                }
            } ),
            buyer:{},
            date: new Date().toLocaleString(),
            total: totalPreciosProductos
        })
    },[removeItem])

    // para que sean forms reutilizables, en lugar de crear un estado para cada uno de los campos, es decir poner const name, phone, mail
    // mejor crear un estado q sea un objeto q contenga toda la info

    const [formData, setFormData] = useState({
        name:"",
        phone:"",
        email:""
    })

   

    const handleChange = (e) =>{
        // Para evitar q se haga por parametros, se accede al tipo de dato directametne a traves del target.name, que vendria a ser como un id
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData })
        pushData({...order, buyer: formData })
    }

    const pushData = async (newOrder) => {
        // Primero seleccionamos la colection q hacemos referencia, el mismo nombre de firebase
        const collectionOrder = collection(db, 'ordenes')
        // Seleccionamos el documento, y se lo agregamos al elemento addDoct
        // Pushea el documento a la coleccion
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log()
    }

    return(
        <>
            {cartProducts.length === 0 ? 
                    <div className='text-center '>
                        <div className=''>
                            <RemoveShoppingCartIcon style={{color:"gray"}}/>
                        </div>
                        <div>
                            <p className='w-50 m-auto' style={{fontSize:".75em", color:"gray", textAlign:"center"}}>Aún no tenes productos comprados</p> 
                            <Link to="/"><button className='btn btn-primary'>Volver al home</button></Link>
                        </div>
                    </div>
                    :
                    
                    <div className="row">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Imagen Producto</TableCell>
                                    <TableCell align="center">Nombre producto</TableCell>
                                    <TableCell align="center">Precio</TableCell>
                                    <TableCell align="center">Cantidad</TableCell>
                                    <TableCell>Acción</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {cartProducts.map((product) => {
                                    return(
                                        
                                        <TableRow 
                                            key={product.id} 
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align='center' component="th" scope="row">
                                        <img style={{width:"90px"}} src={product.img} alt={product.title}/>
                                        </TableCell>
                                        <TableCell align="center">{product.title}</TableCell>
                                        <TableCell align="center">$ {product.price}</TableCell>
                                        <TableCell align="center">{product.countQuantity}</TableCell>
                                        <TableCell>
                                            <div className='d-flex align-items-center'>
                                            <Fab size="small" color="warning" className="" aria-label="add" onClick={() => removeItem(product.id)}>
                                                <DeleteIcon />
                                            </Fab>

                                            </div>
                                        </TableCell>
                                        </TableRow>
                                        
                                    )
                                })} 
                                
                            </TableBody>
                        </Table>

                    </TableContainer>
                    {totalPreciosProductos === 0 ? 
                    "" : 
                    <div className='card'>
                        <h4 className='my-3'>Total Productos: ${totalPreciosProductos}</h4> 
                        {/* Se pone () => para que no se llame infinitas veces */}
                        <button onClick={ () => setShowModal(true)}>Ir a pagar</button>
                    </div>
                    }
                    {console.log("orden: ", order)}
                    </div>


/*                     cartProducts.map((product) =>{
                    {console.log("Titulo del producto: " , product.title)}
                    return(
                        <>

                        <div key={product.id} className="card px-4 m-3">
                            
                            <div className='d-flex justify-content-between'>
                                <img style={{width:"90px"}} src={product.img} alt={product.title}/>
                                <div className='m-3'>
                                    <h6>{product.title}</h6>
                                    <h6 style={{textAlign:"left"}}><strong>Precio:</strong> $ {product.price} c/u</h6>
                                    <div className='d-flex'>
                                        <p className='m-0 p-0' style={{}}>{console.log("Cantidad: ", product.countQuantity )}CANTIDAD: {product.countQuantity}</p>
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
                        </>
                      )
                    }) */

                }

                {showModal && 
                    <Modal title="Datos del comprador" close={() => setShowModal()}>
                        {success ? (
                            <>
                            <h2>Su orden se ha generado correctametne</h2>
                            <p>ID de compra: {success}</p>
                            </>
                        ): (
                            <form>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder='Ingrese su nombre'
                                // Se pone el onchange para q se pueda cargar la data, sino lo toma como empty, asi se actauliza el estado 
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <input 
                                type="number" 
                                name="phone" 
                                placeholder='Ingrese celular'
                                // Se pone el onchange para q se pueda cargar la data, sino lo toma como empty, asi se actauliza el estado 
                                onChange={handleChange}
                                value={formData.phone}
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email"
                                // Se pone el onchange para q se pueda cargar la data, sino lo toma como empty, asi se actauliza el estado 
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <button type='submit' onClick={submitData}>Enviar</button>
                        </form>
                        )}
                       
                    </Modal>
                }

                
        </>
    )
}
export default Cart