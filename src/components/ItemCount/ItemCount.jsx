import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



/* El contador tiene q tener logica x detras, q el contador no puede superar la cantidad total a traves
de la prop Stock x ej */
const ItemCount = ({ stock, initial, setQuantitySelected, productData }) => {

  /* solo se llama a la funcion que se encargue de modificar al estiado de cartproducts */
  const { addProductToCart} = useContext(CartContext)

  const [countQuantity, setCountQuantity] = useState(1);
  const [btnRestaActivo, SetBtnRestaActivo] = useState(false);
  const [btnSumaActivo, SetBtnSumaActivo] = useState(false);


  
  const addQuantity = () => {
    setCountQuantity(countQuantity + 1);
    if (countQuantity >= 1) {
      SetBtnRestaActivo(false)

    }
    if (countQuantity === stock - 1) {
      SetBtnSumaActivo(true)

    }
  };

  const removeQuantity = () => {
    setCountQuantity(countQuantity - 1);
    if (countQuantity <= initial) {
      SetBtnRestaActivo(true)

    }
    if (countQuantity <= stock) {
      SetBtnSumaActivo(false)

    }

  };

  const onAdd = () =>{
    setQuantitySelected(countQuantity)
    addProductToCart({...productData, countQuantity})
  }
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center rounded mb-3" style={{ backgroundColor: "white", border: "1px solid black" }}>
        <button
          className="mx-2"
          style={{ border: "none", backgroundColor: "transparent", fontSize: "1.4em" }}
          onClick={removeQuantity}
          disabled={btnRestaActivo} >-</button>

        <p className="m-0 p-0 text-dark">{countQuantity}</p>

        <button
          className="mx-2"
          style={{ border: "none", backgroundColor: "transparent", fontSize: "1.4em" }}
          onClick={addQuantity}
          disabled={btnSumaActivo}>+</button>

      </div>
      <div>
          <button className='btn' style={{background: "gray",border: "none",color: "white"}}
          onClick={onAdd}>
          <AddShoppingCartIcon className="mx-1" />
          Añadir al carrito
        </button>
        
      </div>

    </div>

  )
}
export default ItemCount