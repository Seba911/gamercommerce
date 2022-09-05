import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    const preciosProductos = cartProducts.map((product) => product.price * product.countQuantity)
    let totalPreciosProductos = preciosProductos.reduce((a,b) => a+b, 0)

    const [totalPrice, setTotalPrice] = useState(0)

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
            
        }
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

        let sumarCantidades = cantidad.reduce((a,b) => a+b, 0)

        setTotalProducts(sumarCantidades)
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
        totalPrice
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

export { CartContext }