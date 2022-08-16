import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Fab from '@mui/material/Fab';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cart = () =>{

    const { cartProducts, clear, removeItem, totalPreciosProductos } = useContext(CartContext)

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

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
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Imagen Producto</TableCell>
                                <TableCell align="center">Nombre producto</TableCell>
                                <TableCell align="center">Precio</TableCell>
                                <TableCell align="center">Cantidad</TableCell>
                                <TableCell align="">Acción</TableCell>
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
                                    <TableCell align="">
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


                {totalPreciosProductos === 0 ? 
                    "" : 
                <h4 className='my-3' style={{color:"white"}}>Total Productos: ${totalPreciosProductos}</h4> }
                
        </>
    )
}
export default Cart