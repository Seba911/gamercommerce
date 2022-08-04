import { useState } from "react";

/* El contador tiene q tener logica x detras, q el contador no puede superar la cantidad total a traves
de la prop Stock x ej */
const ItemCount = ({ stock, initial, setQuantitySelected }) => {

  const [countQuantity, setCountQuantity] = useState(initial);
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
  }
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center rounded mb-3" style={{ backgroundColor: "white", border: "1px solid black" }}>
        <button
          className="mx-2"
          style={{ border: "none", backgroundColor: "transparent", fontSize: "1.4em" }}
          onClick={removeQuantity}
          disabled={btnRestaActivo} >-</button>

        <p className="m-0 p-0">{countQuantity}</p>

        <button
          className="mx-2"
          style={{ border: "none", backgroundColor: "transparent", fontSize: "1.4em" }}
          onClick={addQuantity}
          disabled={btnSumaActivo}>+</button>

      </div>
      <div>
        <button className='btn' style={{background: "gray",border: "none",color: "white"}}
          onClick={onAdd}>
          Añadir al carrito
        </button>
      </div>
    </div>

  )
}
export default ItemCount


/* import React from 'react';
import { useState } from 'react';

const Contador = () => {

  const [count, setCount] = useState(1);
  const [date, setDate] = useState()
  let Fecha = new Date().toLocaleString();
  const addNumber = () => {
    console.log(Fecha)
    setCount(count + 1);
    setDate(Fecha)
    if(count >= 0){
      resta.style.display="block"
    }
  };
  const decreaseNumber = () => {
    let resta = document.getElementById("resta")
    setDate(Fecha)
    console.log(Fecha)
    setCount(count - 1);
    if(count <= 1){
      resta.style.display="none"
    }
  };


  return (
    <>
    <div style={{display:"flex"}}>
      <button id="resta" onClick={decreaseNumber}>-</button>
      <p>{count}</p>
      <button onClick={addNumber}>+</button>

    </div>
    <div>
      <p>Cantidad de clicks: {count}</p>
      <p>Ultimo click: {date}</p>
    </div> 
    </>
  );
};
export default Contador; */
