import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss'
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
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Loading from '../Loading/Loading'

const Cart = () =>{

    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { cartProducts, removeItem, totalPreciosProductos, clear } = useContext(CartContext)
    

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
  /*       e.preventDefault() */
        setLoading(true)
        pushData({...order, buyer: formData })
        
    }

    const pushData = async (newOrder) => {
        // Primero seleccionamos la colection q hacemos referencia, el mismo nombre de firebase
        const collectionOrder = collection(db, 'ordenes')
        // Seleccionamos el documento, y se lo agregamos al elemento addDoct
        // Pushea el documento a la coleccion
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setLoading(false)
        setSuccess(orderDoc.id)
        clear()
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
                    
                    <div className="row mx-3">
                    <TableContainer className="bg-dark " component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell align="center" style={{color:"white"}} >Imagen Producto</TableCell>
                                    <TableCell align="center" style={{color:"white"}} >Nombre producto</TableCell>
                                    <TableCell align="center" style={{color:"white"}} >Precio</TableCell>
                                    <TableCell align="center" style={{color:"white"}} >Cantidad</TableCell>
                                    <TableCell style={{color:"white"}}>Acción</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody >
                                {cartProducts.map((product) => {
                                    return(
                                        
                                        <TableRow 
                                            key={product.id} 
                                            
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align='center' component="th" scope="row">
                                        <img className='rounded' style={{width:"90px"}} src={product.img} alt={product.title}/>
                                        </TableCell>
                                        <TableCell align="center" style={{color:"white"}}>{product.title}</TableCell>
                                        <TableCell align="center" style={{color:"white"}}>$ {product.price}</TableCell>
                                        <TableCell align="center" style={{color:"white"}}>{product.countQuantity}</TableCell>
                                        <TableCell>
                                            <div className='d-flex align-items-center'>
                                            <Fab size="small" color="error" className="" aria-label="add" onClick={() => removeItem(product.id)}>
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
                    <div className='card bg-dark p-3'>
                        <h4 className='my-3' style={{color:"white"}}>Total a abonar: ${totalPreciosProductos}</h4> 
                        {/* Se pone () => para que no se llame infinitas veces */}
                        <div>
                            <button className="btn btn-primary" onClick={ () => setShowModal(true)}><LocalAtmIcon className='mx-2' />Ir a abonar</button>
                        </div>

                    </div>
                    }
                    {/* {console.log("orden: ", order)} */}
                    </div>

                }

                {showModal && 
                    <Modal title="Datos del comprador" close={() => setShowModal()}>
                        {success ? (
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className=''>
                                    <img style={{width:100}} src='../assets/images/check.svg' alt="imgmuestra"/>
                                    <h2>Su orden se ha generado correctamente</h2>
                                    <p>ID de compra: <span  style={{ backgroundColor:"#9d5bff",padding:5, color: "white", fontWeight: "400", fontSize:".9em", borderRadius:5 }}>{success}</span></p>
                                    <button className='btn btn-primary' onClick={() =>setShowModal()}>Volver a comprar</button>
                                </div>
                            </div>

                        ): (
                            <form onSubmit={handleSubmit(submitData)}>
                                <div>
                                    <div className="mb-2">
                                        <label htmlFor="name"></label>
                                        <input 
                                            {...register("name", {required: "Debe ingresar su nombre", maxLength: 80})}
                                            type="text" 
                                            name="name" 
                                            placeholder='Ingrese su nombre'
                                            // Se pone el onchange para q se pueda cargar la data, sino lo toma como empty, asi se actauliza el estado 
                                            onChange={handleChange}
                                            
                                        />
                                        <div>
                                        <ErrorMessage style={{color:"red"}} errors={errors} name="name" as="p" />

                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="phone"></label>
                                        <input 
                                            {...register("phone", {required: "Ingrese un número de telefono"})}
                                            type="number" 
                                            name="phone" 
                                            placeholder='Ingrese celular'
                                            // Se pone el onchange para q se pueda cargar la data, sino lo toma como empty, asi se actauliza el estado 
                                            onChange={handleChange}
                                            value={formData.phone}
                                        />
                                        <div>
                                        <ErrorMessage style={{color:"red"}} errors={errors} name="phone" as="p" />

                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email"></label>
                                        <input 
                                            {...register("email", {required: "Mail obligatorio"})}
                                            type="email" 
                                            name="email" 
                                            placeholder="Email"
                                            // Se pone el onchange para q se pueda cargar la data, sino lo toma como empty, asi se actauliza el estado 
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                        <div>

                                        <ErrorMessage style={{color:"red"}} errors={errors} name="email" as="p"/>
                                        </div>
                                    </div>
                                    <div>

                                    {loading ? <Loading /> : <input className='neonBtn mt-4' style={{fontSize:".8em"}}  type='submit' value="Finalizar" />}
                                    </div>
                            {/*         <input className='neonBtn mt-4' style={{fontSize:".8em"}}  type='submit' value="Finalizar" /> */}
                                </div>
                            </form>
                        )}
                       
                    </Modal>
                }

                
        </>
    )
}
export default Cart