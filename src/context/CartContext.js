import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    const preciosProductos = cartProducts.map((product) => product.price * product.countQuantity)
    let totalPreciosProductos = preciosProductos.reduce((a,b) => a+b, 0)

    const [totalPrice, setTotalPrice] = useState(0)


/*     const [stockDisponible, setStockDisponible] = useState()
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState()

    const mapCantidadSeleccionada = cartProducts.map((product) => product.countQuantity)


    const mapStockDisponible = cartProducts.map((product) => product.stock)

    useEffect(() =>{
        setStockDisponible(mapStockDisponible[0])
        setCantidadSeleccionada(mapCantidadSeleccionada[0])
    })

    console.log("stockDisponible: ", stockDisponible)
    console.log("cantidadSeleccionada: ", cantidadSeleccionada) */


    const addProductToCart = (product) => {
        const productIndex = cartProducts.findIndex((productInCart) => productInCart.id  === product.id)
        if(productIndex === -1){
            setTotalProducts(totalProducts + product.countQuantity)
            setTotalPrice(totalPrice + product.price * product.countQuantity)
            setCartProducts([...cartProducts, product])
            
            

        } else{
            const cartCopy = [...cartProducts];
            cartCopy[productIndex].countQuantity = cartCopy[productIndex].countQuantity + product.countQuantity
            setCartProducts(cartCopy)
            
/*             const cartCopy = [...cartProducts];
            if(cartCopy[productIndex].countQuantity >= cartCopy[productIndex].stock){
                console.log(cartCopy[productIndex].countQuantity)
                alert(`Maximo permitido: ${product.stock}`)
            } else{
                cartCopy[productIndex].countQuantity = cartCopy[productIndex].countQuantity + product.countQuantity
                console.log("cartCopy: ",cartCopy[productIndex].stock)

            } */
        }

/*         const isProductInCart = cartProducts.find((productInCart) => productInCart.id  === product.id)

        const newArray = cartProducts.map(productInCart =>{
            if(productInCart.id === product.id){
                return {...productInCart, countQuantity: productInCart.countQuantity + product.countQuantity}
            } else{
                return productInCart;
            }
        })
        setCartProducts(newArray) */
    }

    const clear = () => {
        setCartProducts([])
        setTotalProducts(0)
    }

    const removeItem = (id) => {

        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProducts(newCart)

        const cantidad = []

        newCart.map((product) => {
            return cantidad.push(product.countQuantity)
        })

        console.log("cantidad: ", cantidad)

        let sumarCantidades = cantidad.reduce((a,b) => a+b, 0)

        console.log("sumarCantidades: ", sumarCantidades)
        setTotalProducts(sumarCantidades)


        


/*         const newCartCountQuantity = newCart.map((product) => product.countQuantity)
        let cantidadTotalProductos = newCartCountQuantity.find(object =>{
            return object
        })
        console.log("cantidadTotalProductos: ", cantidadTotalProductos)

        setTotalProducts(totalProducts - cantidadTotalProductos) */
    }

    
    const data = {
        cartProducts,
        /* para modificarlos se pone setcartproducts */
        setCartProducts,
        clear,
        removeItem,
        addProductToCart,
        totalProducts,
        totalPreciosProductos,
        totalPrice,
/*         cantidadSeleccionada */
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

export { CartContext }